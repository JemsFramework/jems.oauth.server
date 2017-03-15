import { ScopeBaseFlow } from './ScopeBaseFlow'
import { IFlowHandler } from '../IFlowHandler'

/**
 * Represents a authorization code flow.
 */
export class AuthorizationCodeFlow extends ScopeBaseFlow {
    constructor() {
        super('authorization_code');
    }  

    /**
     * Execute the flow and handle it with the given handler.
     * @param handler Represents the handler for the flow.
     */
    public execute(handler:IFlowHandler):void { 
               
    }
}