"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let _ = require('lodash');
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
const pip_services3_aws_node_1 = require("pip-services3-aws-node");
class EventRulesLambdaClientV1 extends pip_services3_aws_node_1.CommandableLambdaClient {
    constructor(config) {
        super('event_rules');
        if (config != null)
            this.configure(pip_services3_commons_node_1.ConfigParams.fromValue(config));
    }
    getEventRules(correlationId, filter, paging, callback) {
        this.callCommand('get_event_rules', correlationId, {
            filter: filter,
            paging: paging
        }, callback);
    }
    getEventRuleById(correlationId, ruleId, callback) {
        this.callCommand('get_event_rule_by_id', correlationId, {
            rule_id: ruleId
        }, callback);
    }
    createEventRule(correlationId, rule, callback) {
        this.callCommand('create_event_rule', correlationId, {
            rule: rule
        }, callback);
    }
    updateEventRule(correlationId, rule, callback) {
        this.callCommand('update_event_rule', correlationId, {
            rule: rule
        }, callback);
    }
    deleteEventRuleById(correlationId, ruleId, callback) {
        this.callCommand('delete_event_rule_by_id', correlationId, {
            rule_id: ruleId
        }, callback);
    }
    unsetObject(correlationId, orgId, objectId, callback) {
        this.callCommand('unset_object', correlationId, {
            org_id: orgId,
            object_id: objectId
        }, callback);
    }
    unsetGroup(correlationId, orgId, groupId, callback) {
        this.callCommand('unset_group', correlationId, {
            org_id: orgId,
            group_id: groupId
        }, callback);
    }
    unsetZone(correlationId, orgId, zoneId, callback) {
        this.callCommand('unset_zone', correlationId, {
            org_id: orgId,
            zone_id: zoneId
        }, callback);
    }
}
exports.EventRulesLambdaClientV1 = EventRulesLambdaClientV1;
//# sourceMappingURL=EventRulesLambdaClientV1.js.map