import { CoffeeEntityBase } from '../CoffeeEntityBase';
import type { CoffeeSDK } from '../CoffeeSDK';
import type { Control } from '../types';
import type { Hot, HotListMatch } from '../CoffeeTypes';
declare class HotEntity extends CoffeeEntityBase<Hot> {
    constructor(client: CoffeeSDK, entopts: any);
    make(this: HotEntity): HotEntity;
    list(this: any, reqmatch?: HotListMatch, ctrl?: Control): Promise<HotEntity[]>;
}
export { HotEntity };
