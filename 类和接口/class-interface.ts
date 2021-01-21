interface IRadio {
    switchRadio (trigger: boolean): void
}

interface IBattery {
    checkBatteryStatus(): void
}

interface IRadioWithBattery extends IRadio {
    checkBatteryStatus(): void
}

class Car implements IRadio {
    switchRadio (trigger: boolean) {

    }
}

class CellPhone implements IRadioWithBattery {
    switchRadio (trigger: boolean) {

    }
    checkBatteryStatus() {

    }
}

