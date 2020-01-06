import { Descriptor } from 'pip-services3-commons-node';
import { Factory } from 'pip-services3-components-node';

import { EventRulesNullClientV1 } from '../version1/EventRulesNullClientV1';
import { EventRulesMemoryClientV1 } from '../version1/EventRulesMemoryClientV1';
import { EventRulesDirectClientV1 } from '../version1/EventRulesDirectClientV1';
import { EventRulesHttpClientV1 } from '../version1/EventRulesHttpClientV1';
import { EventRulesLambdaClientV1 } from '../version1/EventRulesLambdaClientV1';

export class EventRulesClientFactory extends Factory {
	public static Descriptor: Descriptor = new Descriptor('iqs-services-eventrules', 'factory', 'default', 'default', '1.0');
	public static NullClientV1Descriptor = new Descriptor('iqs-services-eventrules', 'client', 'null', 'default', '1.0');
	public static MemoryClientV1Descriptor = new Descriptor('iqs-services-eventrules', 'client', 'memory', 'default', '1.0');
	public static DirectClientV1Descriptor = new Descriptor('iqs-services-eventrules', 'client', 'direct', 'default', '1.0');
	public static HttpClientV1Descriptor = new Descriptor('iqs-services-eventrules', 'client', 'http', 'default', '1.0');
	public static LambdaClientV1Descriptor = new Descriptor('iqs-services-eventrules', 'client', 'lambda', 'default', '1.0');
	
	constructor() {
		super();

		this.registerAsType(EventRulesClientFactory.NullClientV1Descriptor, EventRulesNullClientV1);
		this.registerAsType(EventRulesClientFactory.MemoryClientV1Descriptor, EventRulesMemoryClientV1);
		this.registerAsType(EventRulesClientFactory.DirectClientV1Descriptor, EventRulesDirectClientV1);
		this.registerAsType(EventRulesClientFactory.HttpClientV1Descriptor, EventRulesHttpClientV1);
		this.registerAsType(EventRulesClientFactory.LambdaClientV1Descriptor, EventRulesLambdaClientV1);
	}
	
}
