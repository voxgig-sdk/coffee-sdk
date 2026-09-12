import { CoffeeEntityBase } from '../CoffeeEntityBase';
import type { CoffeeSDK } from '../CoffeeSDK';
import type { Control } from '../types';
import type { Iced, IcedListMatch } from '../CoffeeTypes';
declare class IcedEntity extends CoffeeEntityBase<Iced> {
    constructor(client: CoffeeSDK, entopts: any);
    make(this: IcedEntity): IcedEntity;
    list(this: any, reqmatch?: IcedListMatch, ctrl?: Control): Promise<IcedEntity[]>;
}
export { IcedEntity };
