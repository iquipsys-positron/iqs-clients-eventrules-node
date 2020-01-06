import { FilterParams } from 'pip-services3-commons-node';
import { PagingParams } from 'pip-services3-commons-node';
import { DataPage } from 'pip-services3-commons-node';
import { DirectClient } from 'pip-services3-rpc-node';
import { IEventRulesClientV1 } from './IEventRulesClientV1';
import { EventRuleV1 } from './EventRuleV1';
export declare class EventRulesDirectClientV1 extends DirectClient<any> implements IEventRulesClientV1 {
    constructor();
    getEventRules(correlationId: string, filter: FilterParams, paging: PagingParams, callback: (err: any, page: DataPage<EventRuleV1>) => void): void;
    getEventRuleById(correlationId: string, ruleId: string, callback: (err: any, rule: EventRuleV1) => void): void;
    createEventRule(correlationId: string, rule: EventRuleV1, callback: (err: any, rule: EventRuleV1) => void): void;
    updateEventRule(correlationId: string, rule: EventRuleV1, callback: (err: any, rule: EventRuleV1) => void): void;
    deleteEventRuleById(correlationId: string, ruleId: string, callback: (err: any, rule: EventRuleV1) => void): void;
    unsetObject(correlationId: string, orgId: string, objectId: string, callback: (err: any) => void): void;
    unsetGroup(correlationId: string, orgId: string, groupId: string, callback: (err: any) => void): void;
    unsetZone(correlationId: string, orgId: string, zoneId: string, callback: (err: any) => void): void;
}
