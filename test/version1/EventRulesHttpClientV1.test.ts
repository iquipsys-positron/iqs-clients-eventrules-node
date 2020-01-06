let assert = require('chai').assert;
let async = require('async');

import { Descriptor } from 'pip-services3-commons-node';
import { ConfigParams } from 'pip-services3-commons-node';
import { References } from 'pip-services3-commons-node';
import { ConsoleLogger } from 'pip-services3-components-node';

import { EventRulesMemoryPersistence } from 'iqs-services-eventrules-node';
import { EventRulesController } from 'iqs-services-eventrules-node';
import { EventRulesHttpServiceV1 } from 'iqs-services-eventrules-node';
import { IEventRulesClientV1 } from '../../src/version1/IEventRulesClientV1';
import { EventRulesHttpClientV1 } from '../../src/version1/EventRulesHttpClientV1';
import { EventRulesClientFixtureV1 } from './EventRulesClientFixtureV1';

var httpConfig = ConfigParams.fromTuples(
    "connection.protocol", "http",
    "connection.host", "localhost",
    "connection.port", 3000
);

suite('EventRulesHttpClientV1', ()=> {
    let service: EventRulesHttpServiceV1;
    let client: EventRulesHttpClientV1;
    let fixture: EventRulesClientFixtureV1;

    suiteSetup((done) => {
        let logger = new ConsoleLogger();
        let persistence = new EventRulesMemoryPersistence();
        let controller = new EventRulesController();

        service = new EventRulesHttpServiceV1();
        service.configure(httpConfig);

        let references: References = References.fromTuples(
            new Descriptor('pip-services', 'logger', 'console', 'default', '1.0'), logger,
            new Descriptor('iqs-services-eventrules', 'persistence', 'memory', 'default', '1.0'), persistence,
            new Descriptor('iqs-services-eventrules', 'controller', 'default', 'default', '1.0'), controller,
            new Descriptor('iqs-services-eventrules', 'service', 'http', 'default', '1.0'), service
        );
        controller.setReferences(references);
        service.setReferences(references);

        client = new EventRulesHttpClientV1();
        client.setReferences(references);
        client.configure(httpConfig);

        fixture = new EventRulesClientFixtureV1(client);

        service.open(null, (err) => {
            client.open(null, done);
        });
    });
    
    suiteTeardown((done) => {
        client.close(null);
        service.close(null, done);
    });

    test('CRUD Operations', (done) => {
        fixture.testCrudOperations(done);
    });

    test('Unset References', (done) => {
        fixture.testUnsetReferences(done);
    });

});
