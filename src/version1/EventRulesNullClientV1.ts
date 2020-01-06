import { IReferences } from 'pip-services3-commons-node';
import { Descriptor } from 'pip-services3-commons-node';
import { FilterParams } from 'pip-services3-commons-node';
import { PagingParams} from 'pip-services3-commons-node';
import { DataPage } from 'pip-services3-commons-node';

import { IEventRulesClientV1 } from './IEventRulesClientV1';
import { EventRuleV1 } from './EventRuleV1';

export class EventRulesNullClientV1 implements IEventRulesClientV1 {
            
    public getEventRules(correlationId: string, filter: FilterParams, paging: PagingParams, 
        callback: (err: any, page: DataPage<EventRuleV1>) => void): void {
        callback(null, new DataPage<EventRuleV1>([], 0));
    }

    public getEventRuleById(correlationId: string, ruleId: string, 
        callback: (err: any, rule: EventRuleV1) => void): void {
        callback(null, null);
    }

    public createEventRule(correlationId: string, rule: EventRuleV1, 
        callback: (err: any, rule: EventRuleV1) => void): void {
        callback(null, rule);
    }

    public updateEventRule(correlationId: string, rule: EventRuleV1, 
        callback: (err: any, rule: EventRuleV1) => void): void {
        callback(null, rule);
    }

    public deleteEventRuleById(correlationId: string, ruleId: string,
        callback: (err: any, rule: EventRuleV1) => void): void {
        if (callback) callback(null, null);
    }

    public unsetObject(correlationId: string, orgId: string, objectId: string,
        callback: (err: any) => void): void {
        if (callback) callback(null);
    }

    public unsetGroup(correlationId: string, orgId: string, groupId: string,
        callback: (err: any) => void): void {
        if (callback) callback(null);
    }

    public unsetZone(correlationId: string, orgId: string, zoneId: string,
        callback: (err: any) => void): void {
        if (callback) callback(null);
    }

}