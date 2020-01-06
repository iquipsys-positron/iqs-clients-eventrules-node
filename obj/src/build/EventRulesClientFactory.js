"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
const pip_services3_components_node_1 = require("pip-services3-components-node");
const EventRulesNullClientV1_1 = require("../version1/EventRulesNullClientV1");
const EventRulesMemoryClientV1_1 = require("../version1/EventRulesMemoryClientV1");
const EventRulesDirectClientV1_1 = require("../version1/EventRulesDirectClientV1");
const EventRulesHttpClientV1_1 = require("../version1/EventRulesHttpClientV1");
const EventRulesLambdaClientV1_1 = require("../version1/EventRulesLambdaClientV1");
class EventRulesClientFactory extends pip_services3_components_node_1.Factory {
    constructor() {
        super();
        this.registerAsType(EventRulesClientFactory.NullClientV1Descriptor, EventRulesNullClientV1_1.EventRulesNullClientV1);
        this.registerAsType(EventRulesClientFactory.MemoryClientV1Descriptor, EventRulesMemoryClientV1_1.EventRulesMemoryClientV1);
        this.registerAsType(EventRulesClientFactory.DirectClientV1Descriptor, EventRulesDirectClientV1_1.EventRulesDirectClientV1);
        this.registerAsType(EventRulesClientFactory.HttpClientV1Descriptor, EventRulesHttpClientV1_1.EventRulesHttpClientV1);
        this.registerAsType(EventRulesClientFactory.LambdaClientV1Descriptor, EventRulesLambdaClientV1_1.EventRulesLambdaClientV1);
    }
}
exports.EventRulesClientFactory = EventRulesClientFactory;
EventRulesClientFactory.Descriptor = new pip_services3_commons_node_1.Descriptor('iqs-services-eventrules', 'factory', 'default', 'default', '1.0');
EventRulesClientFactory.NullClientV1Descriptor = new pip_services3_commons_node_1.Descriptor('iqs-services-eventrules', 'client', 'null', 'default', '1.0');
EventRulesClientFactory.MemoryClientV1Descriptor = new pip_services3_commons_node_1.Descriptor('iqs-services-eventrules', 'client', 'memory', 'default', '1.0');
EventRulesClientFactory.DirectClientV1Descriptor = new pip_services3_commons_node_1.Descriptor('iqs-services-eventrules', 'client', 'direct', 'default', '1.0');
EventRulesClientFactory.HttpClientV1Descriptor = new pip_services3_commons_node_1.Descriptor('iqs-services-eventrules', 'client', 'http', 'default', '1.0');
EventRulesClientFactory.LambdaClientV1Descriptor = new pip_services3_commons_node_1.Descriptor('iqs-services-eventrules', 'client', 'lambda', 'default', '1.0');
//# sourceMappingURL=EventRulesClientFactory.js.map