let _ = require('lodash');

import { IReferences } from 'pip-services3-commons-node';
import { Descriptor } from 'pip-services3-commons-node';
import { FilterParams } from 'pip-services3-commons-node';
import { PagingParams} from 'pip-services3-commons-node';
import { DataPage } from 'pip-services3-commons-node';
import { IdGenerator } from 'pip-services3-commons-node';

import { IEventRulesClientV1 } from './IEventRulesClientV1';
import { EventRuleV1 } from './EventRuleV1';

export class EventRulesMemoryClientV1 implements IEventRulesClientV1 {
    private _event_rules: EventRuleV1[] = [];

    private matchString(value: string, search: string): boolean {
        if (value == null && search == null)
            return true;
        if (value == null || search == null)
            return false;
        return value.toLowerCase().indexOf(search) >= 0;
    }

    private matchSearch(item: EventRuleV1, search: string): boolean {
        search = search.toLowerCase();
        if (this.matchString(item.name, search))
            return true;
        return false;
    }

    private composeFilter(filter: FilterParams): any {
        filter = filter || new FilterParams();
        
        let search = filter.getAsNullableString('search');
        let id = filter.getAsNullableString('id');
        let orgId = filter.getAsNullableString('org_id');
        let type = filter.getAsNullableString('type');
        let deleted = filter.getAsBooleanWithDefault('deleted', false);
        
        return (item) => {
            if (id && item.id != id) 
                return false;
            if (orgId && item.org_id != orgId) 
                return false;
            if (type && item.type != type) 
                return false;
            if (search && !this.matchSearch(item, search)) 
                return false;
            if (!deleted && item.deleted) 
                return false;
            return true; 
        };
    }

    public getEventRules(correlationId: string, filter: FilterParams, paging: PagingParams, 
        callback: (err: any, page: DataPage<EventRuleV1>) => void): void {
        let rules = _.filter(this._event_rules, this.composeFilter(filter));
        callback(null, new DataPage<EventRuleV1>(rules, rules.length));
    }

    public getEventRuleById(correlationId: string, ruleId: string, 
        callback: (err: any, rule: EventRuleV1) => void): void {
        let rule = _.find(this._event_rules, r => r.id == ruleId);
        callback(null, rule);
    }

    public createEventRule(correlationId: string, rule: EventRuleV1, 
        callback: (err: any, rule: EventRuleV1) => void): void {

        rule.id = rule.id || IdGenerator.nextLong();
        this._event_rules.push(rule);

        callback(null, rule);
    }

    public updateEventRule(correlationId: string, rule: EventRuleV1, 
        callback: (err: any, rule: EventRuleV1) => void): void {

        this._event_rules = _.filter(this._event_rules, r => r.id != rule.id);
        this._event_rules.push(rule);

        callback(null, rule);
    }

    public deleteEventRuleById(correlationId: string, ruleId: string,
        callback: (err: any, rule: EventRuleV1) => void): void {
        
        let rule = _.find(this._event_rules, r => r.id == ruleId);
        if (rule) rule.deleted = true;

        if (callback) callback(null, rule);
    }

    public unsetObject(correlationId: string, orgId: string, objectId: string,
        callback: (err: any) => void): void {

        _.each(this._event_rules, (r: EventRuleV1) => {
            r.include_object_ids = _.filter(r.include_object_ids, i => i != objectId);
            r.exclude_object_ids = _.filter(r.exclude_object_ids, i => i != objectId);
        });

        if (callback) callback(null);
    }

    public unsetGroup(correlationId: string, orgId: string, groupId: string,
        callback: (err: any) => void): void {

        _.each(this._event_rules, (r: EventRuleV1) => {
            r.include_group_ids = _.filter(r.include_group_ids, i => i != groupId);
            r.exclude_group_ids = _.filter(r.exclude_group_ids, i => i != groupId);
        });

        if (callback) callback(null);
    }

    public unsetZone(correlationId: string, orgId: string, zoneId: string,
        callback: (err: any) => void): void {

        _.each(this._event_rules, (r: EventRuleV1) => {
            r.include_zone_ids = _.filter(r.include_zone_ids, i => i != zoneId);
            r.exclude_zone_ids = _.filter(r.exclude_zone_ids, i => i != zoneId);
        });

        if (callback) callback(null);
    }

}