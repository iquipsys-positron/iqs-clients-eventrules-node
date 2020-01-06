let assert = require('chai').assert;
let async = require('async');

import { Descriptor } from 'pip-services3-commons-node';
import { ConfigParams } from 'pip-services3-commons-node';
import { References } from 'pip-services3-commons-node';
import { ConsoleLogger } from 'pip-services3-components-node';

import { EventRulesMemoryPersistence } from 'iqs-services-eventrules-node';
import { EventRulesController } from 'iqs-services-eventrules-node';
import { IEventRulesClientV1 } from '../../src/version1/IEventRulesClientV1';
import { EventRulesDirectClientV1 } from '../../src/version1/EventRulesDirectClientV1';
import { EventRulesClientFixtureV1 } from './EventRulesClientFixtureV1';

suite('EventRulesDirectClientV1', ()=> {
    let client: EventRulesDirectClientV1;
    let fixture: EventRulesClientFixtureV1;

    suiteSetup((done) => {
        let logger = new ConsoleLogger();
        let persistence = new EventRulesMemoryPersistence();
        let controller = new EventRulesController();

        let references: References = References.fromTuples(
            new Descriptor('pip-services', 'logger', 'console', 'default', '1.0'), logger,
            new Descriptor('iqs-services-eventrules', 'persistence', 'memory', 'default', '1.0'), persistence,
            new Descriptor('iqs-services-eventrules', 'controller', 'default', 'default', '1.0'), controller,
        );
        controller.setReferences(references);

        client = new EventRulesDirectClientV1();
        client.setReferences(references);

        fixture = new EventRulesClientFixtureV1(client);

        client.open(null, done);
    });
    
    suiteTeardown((done) => {
        client.close(null, done);
    });

    test('CRUD Operations', (done) => {
        fixture.testCrudOperations(done);
    });

    test('Unset References', (done) => {
        fixture.testUnsetReferences(done);
    });

});
