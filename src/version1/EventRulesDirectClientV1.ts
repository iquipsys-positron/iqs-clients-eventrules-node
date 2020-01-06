import { IReferences } from 'pip-services3-commons-node';
import { Descriptor } from 'pip-services3-commons-node';
import { FilterParams } from 'pip-services3-commons-node';
import { PagingParams} from 'pip-services3-commons-node';
import { DataPage } from 'pip-services3-commons-node';
import { DirectClient } from 'pip-services3-rpc-node';

import { IEventRulesClientV1 } from './IEventRulesClientV1';
//import { IEventRulesController } from 'iqs-services-eventrules-node';
import { EventRuleV1 } from './EventRuleV1';

export class EventRulesDirectClientV1 extends DirectClient<any> implements IEventRulesClientV1 {
            
    public constructor() {
        super();
        this._dependencyResolver.put('controller', new Descriptor("iqs-services-eventrules", "controller", "*", "*", "*"))
    }

    public getEventRules(correlationId: string, filter: FilterParams, paging: PagingParams, 
        callback: (err: any, page: DataPage<EventRuleV1>) => void): void {
        let timing = this.instrument(correlationId, 'event_rules.get_event_rules');
        this._controller.getEventRules(correlationId, filter, paging, (err, page) => {
            timing.endTiming();
            callback(err, page);
        });
    }

    public getEventRuleById(correlationId: string, ruleId: string, 
        callback: (err: any, rule: EventRuleV1) => void): void {
        let timing = this.instrument(correlationId, 'event_rules.get_event_rule_by_id');
        this._controller.getEventRuleById(correlationId, ruleId, (err, rule) => {
            timing.endTiming();
            callback(err, rule);
        });
    }

    public createEventRule(correlationId: string, rule: EventRuleV1, 
        callback: (err: any, rule: EventRuleV1) => void): void {
        let timing = this.instrument(correlationId, 'event_rules.create_event_rule');
        this._controller.createEventRule(correlationId, rule, (err, rule) => {
            timing.endTiming();
            callback(err, rule);
        });
    }

    public updateEventRule(correlationId: string, rule: EventRuleV1, 
        callback: (err: any, rule: EventRuleV1) => void): void {
        let timing = this.instrument(correlationId, 'event_rules.update_event_rule');
        this._controller.updateEventRule(correlationId, rule, (err, rule) => {
            timing.endTiming();
            callback(err, rule);
        });
    }

    public deleteEventRuleById(correlationId: string, ruleId: string,
        callback: (err: any, rule: EventRuleV1) => void): void {
        let timing = this.instrument(correlationId, 'event_rules.delete_event_rule_by_id');
        this._controller.deleteEventRuleById(correlationId, ruleId, (err, rule) => {
            timing.endTiming();
            callback(err, rule);
        });
    }

    public unsetObject(correlationId: string, orgId: string, objectId: string,
        callback: (err: any) => void): void {
        let timing = this.instrument(correlationId, 'event_rules.unset_object');
        this._controller.unsetObject(correlationId, orgId, objectId, (err) => {
            timing.endTiming();
            if (callback) callback(err);
        });
    }

    public unsetGroup(correlationId: string, orgId: string, groupId: string,
        callback: (err: any) => void): void {
        let timing = this.instrument(correlationId, 'event_rules.unset_group');
        this._controller.unsetGroup(correlationId, orgId, groupId, (err) => {
            timing.endTiming();
            if (callback) callback(err);
        });
    }

    public unsetZone(correlationId: string, orgId: string, zoneId: string,
        callback: (err: any) => void): void {
        let timing = this.instrument(correlationId, 'event_rules.unset_zone');
        this._controller.unsetZone(correlationId, orgId, zoneId, (err) => {
            timing.endTiming();
            if (callback) callback(err);
        });
    }

}