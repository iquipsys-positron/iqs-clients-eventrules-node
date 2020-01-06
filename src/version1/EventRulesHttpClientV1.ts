import { ConfigParams } from 'pip-services3-commons-node';
import { IReferences } from 'pip-services3-commons-node';
import { FilterParams } from 'pip-services3-commons-node';
import { PagingParams } from 'pip-services3-commons-node';
import { DataPage } from 'pip-services3-commons-node';
import { CommandableHttpClient } from 'pip-services3-rpc-node';

import { EventRuleV1 } from './EventRuleV1';
import { IEventRulesClientV1 } from './IEventRulesClientV1';

export class EventRulesHttpClientV1 extends CommandableHttpClient implements IEventRulesClientV1 {       
    
    constructor(config?: any) {
        super('v1/event_rules');

        if (config != null)
            this.configure(ConfigParams.fromValue(config));
    }
                
    public getEventRules(correlationId: string, filter: FilterParams, paging: PagingParams,
        callback: (err: any, page: DataPage<EventRuleV1>) => void): void {
        this.callCommand( 
            'get_event_rules', 
            correlationId,
            {
                filter: filter,
                paging: paging
            }, 
            callback
        );
    }

    public getEventRuleById(correlationId: string, ruleId: string,
        callback: (err: any, rule: EventRuleV1) => void): void {
        this.callCommand( 
            'get_event_rule_by_id',
            correlationId,
            {
                rule_id: ruleId
            }, 
            callback
        );        
    }

    public createEventRule(correlationId: string, rule: EventRuleV1,
        callback: (err: any, rule: EventRuleV1) => void): void {
        this.callCommand(
            'create_event_rule',
            correlationId,
            {
                rule: rule
            }, 
            callback
        );
    }

    public updateEventRule(correlationId: string, rule: EventRuleV1,
        callback: (err: any, rule: EventRuleV1) => void): void {
        this.callCommand(
            'update_event_rule', 
            correlationId,
            {
                rule: rule
            }, 
            callback
        );
    }

    public deleteEventRuleById(correlationId: string, ruleId: string,
        callback: (err: any, rule: EventRuleV1) => void): void {
        this.callCommand(
            'delete_event_rule_by_id', 
            correlationId,
            {
                rule_id: ruleId
            }, 
            callback
        );
    }

    public unsetObject(correlationId: string, orgId: string, objectId: string,
        callback: (err: any) => void): void {
        this.callCommand(
            'unset_object', 
            correlationId,
            {
                org_id: orgId,
                object_id: objectId
            }, 
            callback
        );
    }

    public unsetGroup(correlationId: string, orgId: string, groupId: string,
        callback: (err: any) => void): void {
        this.callCommand(
            'unset_group', 
            correlationId,
            {
                org_id: orgId,
                group_id: groupId
            }, 
            callback
        );
    }

    public unsetZone(correlationId: string, orgId: string, zoneId: string,
        callback: (err: any) => void): void {
        this.callCommand(
            'unset_zone', 
            correlationId,
            {
                org_id: orgId,
                zone_id: zoneId
            }, 
            callback
        );
    }

}
