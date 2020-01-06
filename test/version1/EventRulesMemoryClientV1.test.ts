let assert = require('chai').assert;
let async = require('async');

import { Descriptor } from 'pip-services3-commons-node';
import { ConfigParams } from 'pip-services3-commons-node';
import { References } from 'pip-services3-commons-node';
import { ConsoleLogger } from 'pip-services3-components-node';

import { EventRulesMemoryPersistence } from 'iqs-services-eventrules-node';
import { EventRulesController } from 'iqs-services-eventrules-node';
import { IEventRulesClientV1 } from '../../src/version1/IEventRulesClientV1';
import { EventRulesMemoryClientV1 } from '../../src/version1/EventRulesMemoryClientV1';
import { EventRulesClientFixtureV1 } from './EventRulesClientFixtureV1';

suite('EventRulesMemoryClientV1', ()=> {
    let client: EventRulesMemoryClientV1;
    let fixture: EventRulesClientFixtureV1;

    setup(() => {
        let logger = new ConsoleLogger();

        client = new EventRulesMemoryClientV1();
        fixture = new EventRulesClientFixtureV1(client);
    });
    
    test('CRUD Operations', (done) => {
        fixture.testCrudOperations(done);
    });

    test('Unset References', (done) => {
        fixture.testUnsetReferences(done);
    });

});
