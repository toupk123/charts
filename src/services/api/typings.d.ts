declare namespace API {
    type settingsListItem = {
        name:string
    }

    type InstrumentList = {
        data?: settingsListItem[];
        /** 列表的内容总数 */
        total?: number;
        success?: boolean;
      };
    
}