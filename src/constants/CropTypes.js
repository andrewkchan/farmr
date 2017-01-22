export default cropTypes = {
    APPLE: {
        name: "Apple",
        conditions: {
            APPLE_SCAB: {
                name: "Apple Scab",
                suggestion: `Rake under trees and destroy 
                infected leaves to reduce the number of fungal 
                spores available to start the disease cycle over again next spring.
                Water in the evening or early morning hours (avoid overhead irrigation) 
                to give the leaves time to dry out before infection can occur.
                Spread a 3- to 6-inch layer of compost under trees, keeping it away from the trunk, 
                to cover soil and prevent splash dispersal of the fungal spores.
                `
            },
            BLACK_ROT: {
                name: "Black Rot"
                suggestion: 'Remove any infected parts of the plant/fruits. 
                These are sources of bacteria that may infect the rest of the plant'
            },
            CEDAR_APPLE_RUST: {
                name: "Cedar Apple Rust",
                suggestion: `Keep all the fallen debris and dead fruit cleaned up and away from the tree.
                During the winter, check for red cankers and remove them by cutting them out or pruning away the affected limbs at least six inches beyond the wound. 
                Destroy all infected tissue immediately and keep a watchful eye out for new signs of infection. 
                `
            },
            HEALTHY: {
                name: "Healthy",
                suggestion: 'Your apple is healthy!'
            }
        }
    },
    BLUEBERRY: {
        name: "Blueberry",
        conditions: {
            HEALTHY: {
                name: "Healthy",
                suggestion: 'Your blueberry is healthy!'
            }
        }
    },
    CHERRY: {
        name: "Cherry",
        conditions: {
            POWDERY_MILDEW: {
                name: "Powdery Mildew"
                suggestion:
            },
            HEALTHY: {
                name: "Healthy"
            }
        }
    },
    CORN: {
        name: "Corn",
        conditions: {
            CERCOSPORA_LEAF_SPOT_GRAY_LEAF_SPOT: {
                name: "Cercospora leaf spots (gray leaf spots)"
            },
            COMMON_RUST: {
                name: "Common rust"
            },
            NORTHERN_LEAF_BLIGHT: {
                name: "Northern Leaf Blight"
            },
            HEALTHY: {
                name: "Healthy"
            }
        }
    },
    GRAPE: {
        name: "Grape",
        conditions: {
            BLACK_ROT: {
                name: "Black rot"
            },
            ESCA_BLACK_MEASLES: {
                name: "Esca (Black Measles)"
            },
            LEAF_BLIGHT_ISARIOPSIS_LEAF_SPOT: {
                name: "Leaf blight (Isariopsis Leaf Spot)"
            },
            HEALTHY: {
                name: "Healthy"
            }
        }
    },
    ORANGE: {
        name: "Orange",
        conditions: {
            HAUNGLONGBING_CITRUS_GREENING: {
                name: "Huanglongbing (Citrus greening)"
            }
        }
    },
    PEACH: {
        name: "Peach",
        conditions: {
            BACTERIAL_SPOT: {
                name: "Bacterial spot"
            },
            HEALTHY: {
                name: "Healthy"
            }
        }
    },
    PEPPER: {
        name: "Pepper",
        conditions: {
            BACTERIAL_SPOT: {
                name: "Bacterial spot"
            },
            HEALTHY: {
                name: "Healthy"
            }
        }
    },
    POTATO: {
        name: "Potato",
        conditions: {
            EARLY_BLIGHT: {
                name: "Early blight"
            },
            LATE_BLIGHT: {
                name: "Late blight"
            },
            HEALTHY: {
                name: "Healthy"
            }
        }
    },
    RASPBERRY: {
        name: "Raspberry",
        conditions: {
            HEALTHY: "Healthy"
        }
    },
    SOYBEAN: {
        name: "Soybean",
        conditions: {
            HEALTHY: {
                name: "Healthy"
            }
        }
    },
    SQUASH: {
        name: "Squash",
        conditions: {
            POWDERY_MILDEW: {
                name: "Powdery mildew"
            }
        }
    },
    STRAWBERRY: {
        name: "Strawberry",
        conditions: {
            LEAF_SCORCH: {
                name: "Leaf scorch"
            },
            HEALTHY: {
                name: "Healthy"
            }
        }
    },
    TOMATO: {
        name: "Tomato",
        conditions: {
            BACTERIAL_SPOT: {
                name: "Bacterial spot"
            },
            EARLY_BLIGHT: {
                name: "Early blight"
            },
            LATE_BLIGHT: {
                name: "Late blight"
            },
            LEAF_MOLD: {
                name: "Leaf mold"
            },
            SEPTORIA_LEAF_SPOT: {
                name: "Septoria leaf spot"
            },
            SPIDER_MITES_TWO_SPOTTED_SPIDER_MITE: {
                name: "Spider mites (Two-spotted spider mite)"
            },
            TARGET_SPOT: {
                name: "Target spot"
            },
            TOMATO_YELLOW_LEAF_CURL_VIRUS: {
                name: "Yellow leaf curl virus"
            },
            TOMATO_MOSAIC_VIRUS: {
                name: "Tomato Mosaic virus"
            },
            HEALTHY: {
                name: "Healthy"
            }
        }
    }
}