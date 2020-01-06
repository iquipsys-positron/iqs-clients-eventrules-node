"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let _ = require('lodash');
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
const pip_services3_commons_node_2 = require("pip-services3-commons-node");
const pip_services3_commons_node_3 = require("pip-services3-commons-node");
class EventRulesMemoryClientV1 {
    constructor() {
        this._event_rules = [];
    }
    matchString(value, search) {
        if (value == null && search == null)
            return true;
        if (value == null || search == null)
            return false;
        return value.toLowerCase().indexOf(search) >= 0;
    }
    matchSearch(item, search) {
        search = search.toLowerCase();
        if (this.matchString(item.name, search))
            return true;
        return false;
    }
    composeFilter(filter) {
        filter = filter || new pip_services3_commons_node_1.FilterParams();
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
    getEventRules(correlationId, filter, paging, callback) {
        let rules = _.filter(this._event_rules, this.composeFilter(filter));
        callback(null, new pip_services3_commons_node_2.DataPage(rules, rules.length));
    }
    getEventRuleById(correlationId, ruleId, callback) {
        let rule = _.find(this._event_rules, r => r.id == ruleId);
        callback(null, rule);
    }
    createEventRule(correlationId, rule, callback) {
        rule.id = rule.id || pip_services3_commons_node_3.IdGenerator.nextLong();
        this._event_rules.push(rule);
        callback(null, rule);
    }
    updateEventRule(correlationId, rule, callback) {
        this._event_rules = _.filter(this._event_rules, r => r.id != rule.id);
        this._event_rules.push(rule);
        callback(null, rule);
    }
    deleteEventRuleById(correlationId, ruleId, callback) {
        let rule = _.find(this._event_rules, r => r.id == ruleId);
        if (rule)
            rule.deleted = true;
        if (callback)
            callback(null, rule);
    }
    unsetObject(correlationId, orgId, objectId, callback) {
        _.each(this._event_rules, (r) => {
            r.include_object_ids = _.filter(r.include_object_ids, i => i != objectId);
            r.exclude_object_ids = _.filter(r.exclude_object_ids, i => i != objectId);
        });
        if (callback)
            callback(null);
    }
    unsetGroup(correlationId, orgId, groupId, callback) {
        _.each(this._event_rules, (r) => {
            r.include_group_ids = _.filter(r.include_group_ids, i => i != groupId);
            r.exclude_group_ids = _.filter(r.exclude_group_ids, i => i != groupId);
        });
        if (callback)
            callback(null);
    }
    unsetZone(correlationId, orgId, zoneId, callback) {
        _.each(this._event_rules, (r) => {
            r.include_zone_ids = _.filter(r.include_zone_ids, i => i != zoneId);
            r.exclude_zone_ids = _.filter(r.exclude_zone_ids, i => i != zoneId);
        });
        if (callback)
            callback(null);
    }
}
exports.EventRulesMemoryClientV1 = EventRulesMemoryClientV1;
//# sourceMappingURL=EventRulesMemoryClientV1.js.map