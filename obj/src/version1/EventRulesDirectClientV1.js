"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
const pip_services3_rpc_node_1 = require("pip-services3-rpc-node");
class EventRulesDirectClientV1 extends pip_services3_rpc_node_1.DirectClient {
    constructor() {
        super();
        this._dependencyResolver.put('controller', new pip_services3_commons_node_1.Descriptor("iqs-services-eventrules", "controller", "*", "*", "*"));
    }
    getEventRules(correlationId, filter, paging, callback) {
        let timing = this.instrument(correlationId, 'event_rules.get_event_rules');
        this._controller.getEventRules(correlationId, filter, paging, (err, page) => {
            timing.endTiming();
            callback(err, page);
        });
    }
    getEventRuleById(correlationId, ruleId, callback) {
        let timing = this.instrument(correlationId, 'event_rules.get_event_rule_by_id');
        this._controller.getEventRuleById(correlationId, ruleId, (err, rule) => {
            timing.endTiming();
            callback(err, rule);
        });
    }
    createEventRule(correlationId, rule, callback) {
        let timing = this.instrument(correlationId, 'event_rules.create_event_rule');
        this._controller.createEventRule(correlationId, rule, (err, rule) => {
            timing.endTiming();
            callback(err, rule);
        });
    }
    updateEventRule(correlationId, rule, callback) {
        let timing = this.instrument(correlationId, 'event_rules.update_event_rule');
        this._controller.updateEventRule(correlationId, rule, (err, rule) => {
            timing.endTiming();
            callback(err, rule);
        });
    }
    deleteEventRuleById(correlationId, ruleId, callback) {
        let timing = this.instrument(correlationId, 'event_rules.delete_event_rule_by_id');
        this._controller.deleteEventRuleById(correlationId, ruleId, (err, rule) => {
            timing.endTiming();
            callback(err, rule);
        });
    }
    unsetObject(correlationId, orgId, objectId, callback) {
        let timing = this.instrument(correlationId, 'event_rules.unset_object');
        this._controller.unsetObject(correlationId, orgId, objectId, (err) => {
            timing.endTiming();
            if (callback)
                callback(err);
        });
    }
    unsetGroup(correlationId, orgId, groupId, callback) {
        let timing = this.instrument(correlationId, 'event_rules.unset_group');
        this._controller.unsetGroup(correlationId, orgId, groupId, (err) => {
            timing.endTiming();
            if (callback)
                callback(err);
        });
    }
    unsetZone(correlationId, orgId, zoneId, callback) {
        let timing = this.instrument(correlationId, 'event_rules.unset_zone');
        this._controller.unsetZone(correlationId, orgId, zoneId, (err) => {
            timing.endTiming();
            if (callback)
                callback(err);
        });
    }
}
exports.EventRulesDirectClientV1 = EventRulesDirectClientV1;
//# sourceMappingURL=EventRulesDirectClientV1.js.map