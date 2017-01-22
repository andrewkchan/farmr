import cropTypes from "../constants/CropTypes";

export const SAMPLE_CROPSET = {
    1: {
        name: "Bob",
        species: cropTypes.APPLE,
        condition: cropTypes.APPLE.conditions.APPLE_SCAB,
        timestamp: 58
    },
    2: {
        name: "Alex",
        species: cropTypes.PEACH,
        condition: cropTypes.PEACH.conditions.HEALTHY,
        timestamp: 40
    },
    3: {
        name: "Nitin",
        species: cropTypes.SQUASH,
        condition: cropTypes.SQUASH.conditions.POWDERY_MILDEW,
        timestamp: 6
    },
    4: {
        name: "Tejas",
        species: cropTypes.CORN,
        condition: cropTypes.CORN.conditions.HEALTHY,
        timestamp: 30
    }
};