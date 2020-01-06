let _ = require('lodash');
let async = require('async');
let assert = require('chai').assert;

import { PagingParams } from 'pip-services3-commons-node';

import { EventRuleV1 } from '../../src/version1/EventRuleV1';
import { EventRuleTypeV1 } from '../../src/version1/EventRuleTypeV1';
import { IEventRulesClientV1 } from '../../src/version1/IEventRulesClientV1';

let EVENT_RULE1: EventRuleV1 = {
    id: '1',
    org_id: '1',
    type: EventRuleTypeV1.Entry,
    name: 'Test rule 1',
    interval: 3600,
    severity: 0
};
let EVENT_RULE2: EventRuleV1 = {
    id: '2',
    org_id: '1',
    type: EventRuleTypeV1.Disappear,
    name: 'Test rule 2',
    interval: 3600,
    severity: 0
};

export class EventRulesClientFixtureV1 {
    private _client: IEventRulesClientV1;
    
    constructor(client: IEventRulesClientV1) {
        this._client = client;
    }
        
    public testCrudOperations(done) {
        let rule1, rule2: EventRuleV1;

        async.series([
        // Create one rule
            (callback) => {
                this._client.createEventRule(
                    null,
                    EVENT_RULE1,
                    (err, rule) => {
                        assert.isNull(err);

                        assert.isObject(rule);
                        assert.equal(rule.org_id, EVENT_RULE1.org_id);
                        assert.equal(rule.type, EVENT_RULE1.type);
                        assert.equal(rule.name, EVENT_RULE1.name);

                        rule1 = rule;

                        callback();
                    }
                );
            },
        // Create another rule
            (callback) => {
                this._client.createEventRule(
                    null,
                    EVENT_RULE2,
                    (err, rule) => {
                        assert.isNull(err);

                        assert.isObject(rule);
                        assert.equal(rule.org_id, EVENT_RULE2.org_id);
                        assert.equal(rule.type, EVENT_RULE2.type);
                        assert.equal(rule.name, EVENT_RULE2.name);

                        rule2 = rule;

                        callback();
                    }
                );
            },
        // Get all rules
            (callback) => {
                this._client.getEventRules(
                    null,
                    null,
                    new PagingParams(0,5,false),
                    (err, rules) => {
                        assert.isNull(err);

                        assert.isObject(rules);
                        assert.isTrue(rules.data.length >= 2);

                        callback();
                    }
                );
            },
        // Update the rule
            (callback) => {
                rule1.name = 'Updated rule 1';

                this._client.updateEventRule(
                    null,
                    rule1,
                    (err, rule) => {
                        assert.isNull(err);

                        assert.isObject(rule);
                        assert.equal(rule.name, 'Updated rule 1');
                        assert.equal(rule.id, EVENT_RULE1.id);

                        rule1 = rule;

                        callback();
                    }
                );
            },
        // Delete rule
            (callback) => {
                this._client.deleteEventRuleById(
                    null,
                    rule1.id,
                    (err) => {
                        assert.isNull(err);

                        callback();
                    }
                );
            },
        // Try to get delete rule
            (callback) => {
                this._client.getEventRuleById(
                    null,
                    rule1.id,
                    (err, rule) => {
                        assert.isNull(err);
                        
                        assert.isNotNull(rule);
                        assert.isTrue(rule.deleted);

                        callback();
                    }
                );
            }
        ], done);
    }

    public testUnsetReferences(done) {
        async.series([
        // Create rule
            (callback) => {
                this._client.createEventRule(
                    null,
                    {
                        id: '5',
                        org_id: '1',
                        type: EventRuleTypeV1.Entry,
                        name: 'Test rule 1',
                        interval: 3600,
                        severity: 0,
                        include_object_ids: ['1', '2'],
                        exclude_object_ids: ['1', '2'],
                        include_group_ids: ['1', '2'],
                        exclude_group_ids: ['1', '2'],
                        include_zone_ids: ['1', '2'],
                        exclude_zone_ids: ['1', '2']
                    },
                    (err, rule) => {
                        assert.isNull(err);

                        assert.isObject(rule);
                        assert.equal(rule.org_id, EVENT_RULE1.org_id);
                        assert.lengthOf(rule.include_object_ids, 2);
                        assert.lengthOf(rule.exclude_object_ids, 2);
                        assert.lengthOf(rule.include_group_ids, 2);
                        assert.lengthOf(rule.exclude_group_ids, 2);
                        assert.lengthOf(rule.include_zone_ids, 2);
                        assert.lengthOf(rule.exclude_zone_ids, 2);

                        callback();
                    }
                );
            },
        // Unset object
            (callback) => {
                this._client.unsetObject(
                    null, '1', '1',
                    (err) => {
                        assert.isNull(err);
                        callback();
                    }
                );
            },
        // Unset group
            (callback) => {
                this._client.unsetGroup(
                    null, '1', '1',
                    (err) => {
                        assert.isNull(err);
                        callback();
                    }
                );
            },
        // Unset zone
            (callback) => {
                this._client.unsetZone(
                    null, '1', '1',
                    (err) => {
                        assert.isNull(err);
                        callback();
                    }
                );
            },
        // Get and check the rule
            (callback) => {
                this._client.getEventRuleById(
                    null,
                    '5',
                    (err, rule) => {
                        assert.isNull(err);

                        assert.isObject(rule);
                        assert.equal(rule.org_id, EVENT_RULE1.org_id);
                        assert.lengthOf(rule.include_object_ids, 1);
                        assert.lengthOf(rule.exclude_object_ids, 1);
                        assert.lengthOf(rule.include_group_ids, 1);
                        assert.lengthOf(rule.exclude_group_ids, 1);
                        assert.lengthOf(rule.include_zone_ids, 1);
                        assert.lengthOf(rule.exclude_zone_ids, 1);

                        callback();
                    }
                );
            }
        ], done);
    }
    
}
