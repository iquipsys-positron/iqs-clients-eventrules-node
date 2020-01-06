"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
class EventRulesNullClientV1 {
    getEventRules(correlationId, filter, paging, callback) {
        callback(null, new pip_services3_commons_node_1.DataPage([], 0));
    }
    getEventRuleById(correlationId, ruleId, callback) {
        callback(null, null);
    }
    createEventRule(correlationId, rule, callback) {
        callback(null, rule);
    }
    updateEventRule(correlationId, rule, callback) {
        callback(null, rule);
    }
    deleteEventRuleById(correlationId, ruleId, callback) {
        if (callback)
            callback(null, null);
    }
    unsetObject(correlationId, orgId, objectId, callback) {
        if (callback)
            callback(null);
    }
    unsetGroup(correlationId, orgId, groupId, callback) {
        if (callback)
            callback(null);
    }
    unsetZone(correlationId, orgId, zoneId, callback) {
        if (callback)
            callback(null);
    }
}
exports.EventRulesNullClientV1 = EventRulesNullClientV1;
//# sourceMappingURL=EventRulesNullClientV1.js.map