import { HotEntity } from './entity/HotEntity';
import { IcedEntity } from './entity/IcedEntity';
export type * from './CoffeeTypes';
import { inspect } from 'node:util';
import type { Context, Feature } from './types';
import { config } from './Config';
import { CoffeeEntityBase } from './CoffeeEntityBase';
import { Utility } from './utility/Utility';
import { BaseFeature } from './feature/base/BaseFeature';
declare const stdutil: Utility;
declare class CoffeeSDK {
    _mode: string;
    _options: any;
    _utility: Utility;
    _features: Feature[];
    _rootctx: Context;
    constructor(options?: any);
    options(): any;
    utility(): any;
    prepare(fetchargs?: any): Promise<any>;
    direct(fetchargs?: any): Promise<Error | {
        ok: boolean;
        status: number;
        headers: any;
        data: any;
        err?: undefined;
    } | {
        ok: boolean;
        err: any;
        status?: undefined;
        headers?: undefined;
        data?: undefined;
    }>;
    _rawRequest(fetchargs?: any): Promise<Error | {
        ok: boolean;
        status: number;
        headers: any;
        data: any;
        err?: undefined;
    } | {
        ok: boolean;
        err: any;
        status?: undefined;
        headers?: undefined;
        data?: undefined;
    }>;
    graphql(query: string, variables?: any, ctrl?: any): Promise<any>;
    Hot(entopts?: Record<string, any>): HotEntity;
    Iced(entopts?: Record<string, any>): IcedEntity;
    static test(testoptsarg?: any, sdkoptsarg?: any): CoffeeSDK;
    tester(testopts?: any, sdkopts?: any): CoffeeSDK;
    toJSON(): {
        name: string;
    };
    toString(): string;
    [inspect.custom](): string;
}
declare const SDK: typeof CoffeeSDK;
export { stdutil, config, BaseFeature, CoffeeEntityBase, CoffeeSDK, SDK, };
