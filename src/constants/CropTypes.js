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
                suggestion: `Remove any infected parts of the plant/fruits. 
                These are sources of bacteria that may infect the rest of the plant`
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
                suggestion: `Proactive steps to avoid powdery mildew:
                            Provide adequate air circulation by not crowding plants.
                            Site plants where they will get sufficient light of six hours or more each day. 
                            Minimize shade and trim trees and shrubs that block the light.
                            Treatment:
                            mix one tablespoon of baking soda with a teaspoon of dormant oil and one teaspoon of insecticidal 
                            or liquid soap (not detergent) to a gallon of water. Spray on plants every one to two weeks.`
            },
            HEALTHY: {
                name: "Healthy",
                suggestion: 'Your cherry is healthy!'
            }
        }
    },
    CORN: {
        name: "Corn",
        conditions: {
            CERCOSPORA_LEAF_SPOT_GRAY_LEAF_SPOT: {
                name: "Cercospora leaf spots (gray leaf spots)"
                suggestion: `Pruning out heavily infected areas improves the appearance 
                of affected hydrangeas as well as eliminates many infectious spores. 
                Gather up fallen leaves and other plant debris around the hydrangea 
                and destroy these and the cuttings away from the garden to avoid 
                spreading spores. Use tools disinfected with isopropyl alcohol to 
                prune the plant. Cercospora spores travel via splashing water. 
                Switching to drip irrigation or watering plants only at ground level helps keep the foliage dry. 
                Pruning to improve air circulation allows foliage to dry more quickly after rainfall.`
            },
            COMMON_RUST: {
                name: "Common rust",
                suggestion: `Scout corn to detect common rust early.
                            Apply a foliar fungicide if:
                            Rust is spreading rapidly or likely to spread and yield may be affected
                            Disease exceeds threshold established by your state extension plant pathologist`
            NORTHERN_LEAF_BLIGHT: {
                name: "Northern Leaf Blight",
                suggestion: `Crop rotation to reduce previous corn residues and disease inoculum.
                            Tillage to help break down crop debris and reduce inoculum load.
                            Fungicide application to reduce yield loss and improve harvestability`
            },
            HEALTHY: {
                name: "Healthy",
                suggestion: 'Your corn is healthy!'
            }
        }
    },
    GRAPE: {
        name: "Grape",
        conditions: {
            BLACK_ROT: {
                name: "Black rot"
                suggestion `Cut off the obviously affected parts of the grape vine with a sterile knife.
                Remove all spotted leaves and the black, mummified grapes.
                Be extremely thorough and make sure you remove all parts of the plant 
                that are affected by the black rot.`
            },
            ESCA_BLACK_MEASLES: {
                name: "Esca (Black Measles)",
                suggestion: `Currently no effective management strategies for measles. Please remove infected fruit to prevent
                further infection.`
            },
            LEAF_BLIGHT_ISARIOPSIS_LEAF_SPOT: {
                name: "Leaf blight (Isariopsis Leaf Spot)"
                suggestion: `Fungicides sprayed for other diseases in the season may help to reduce this disease.`
            },
            HEALTHY: {
                name: "Healthy",
                suggestion: 'Your grape is healthy!'
            }
        }
    },
    ORANGE: {
        name: "Orange",
        conditions: {
            HAUNGLONGBING_CITRUS_GREENING: {
                name: "Huanglongbing (Citrus greening)",
                suggestion: `No cure for citrus greening disease is known, but it is important to have
                antibacterial management, sanitation, removal of infected plants, frequent scouting, and most importantly, crisis declaration.
                `
            }
        }
    },
    PEACH: {
        name: "Peach",
        conditions: {
            BACTERIAL_SPOT: {
                name: "Bacterial spot",
                suggestion: `Oxytetracycline is generally considered the most effective compound and the least prone to phytotoxicity problems 
                One disease management strategy is to “hide” more susceptible varieties on the inside of orchard blocks with the most resistant 
                varieties on the exposed orchard edges. Another strategy is to establish sod strips between trees and to use gravel or other 
                dust-suppressing methods on nearby dirt roads.
                `
            },
            HEALTHY: {
                name: "Healthy",
                suggestion: 'Your peach is healthy!'
            }
        }
    },
    PEPPER: {
        name: "Pepper",
        conditions: {
            BACTERIAL_SPOT: {
                name: "Bacterial spot",
                suggestion: `The primary management strategy of bacterial spot begins with use of certified pathogen-free 
                seed and disease-free transplants. The bacteria do not survive well once host material has decayed, so 
                crop rotation is recommended. Once the bacteria are introduced into a field or greenhouse, the disease is very difficult to control.`
            },
            HEALTHY: {
                name: "Healthy",
                suggestion: 'Your peach is healthy!'
            }
        }
    },
    POTATO: {
        name: "Potato",
        conditions: {
            EARLY_BLIGHT: {
                name: "Early blight",
                suggestion: `Prune or stake plants to improve air circulation and reduce fungal problems.
                For best control, apply copper-based fungicides early, two weeks before disease normally appears or when weather forecasts predict a long period of wet weather. 
                Alternatively, begin treatment when disease first appears, and repeat every 7-10 days for as long as needed.
                `
            },
            LATE_BLIGHT: {
                name: "Late blight",
                suggestion: `Plant resistant cultivars when available.
                            Remove volunteers from the garden prior to planting and space plants far enough apart to allow for plenty of air circulation.
                            Water in the early morning hours, or use soaker hoses, to give plants time to dry out during the day — avoid overhead irrigation.
                            Destroy all tomato and potato debris after harvest`
            },
            HEALTHY: {
                name: "Healthy",
                suggestion: 'Your potato is healthy!'
            }
        }
    },
    RASPBERRY: {
        name: "Raspberry",
        conditions: {
            HEALTHY: {
                name: "Healthy",
                suggestion: 'Your raspberry is healthy!'
            }
        }
    },
    SOYBEAN: {
        name: "Soybean",
        conditions: {
            HEALTHY: {
                name: "Healthy",
                suggestion: 'Your soybean is healthy!'
            }
        }
    },
    SQUASH: {
        name: "Squash",
        conditions: {
            POWDERY_MILDEW: {
                name: "Powdery mildew",
                suggestion: `Practicing a crop rotation will go a long way in preventing the spread of powdery mildew.
                Destroy any diseased plant debris. Sulfur and “Stylet” oil are effective products for powdery mildew control.`}
        }
    },
    STRAWBERRY: {
        name: "Strawberry",
        conditions: {
            LEAF_SCORCH: {
                name: "Leaf scorch",
                suggestion: `Choose sites with full sun, good soil drainage and air circulation.
                Remove weeds to improve air circulation around plants.
                Plant in rows or narrow beds, no wider than 12-18 inches to promote good air movement in and around plants. 
                Patches grow with time as new runners are produced. Use renovation to maintain narrow beds
                `
            },
            HEALTHY: {
                name: "Healthy",
                suggestion: 'Your strawberry is healthy!'
            }
        }
    },
    TOMATO: {
        name: "Tomato",
        conditions: {
            BACTERIAL_SPOT: {
                name: "Bacterial spot",
                suggestion: `The primary management strategy of bacterial spot begins with use of certified pathogen-free 
                seed and disease-free transplants. The bacteria do not survive well once host material has decayed, so 
                crop rotation is recommended. Once the bacteria are introduced into a field or greenhouse, the disease is very difficult to control.`
            },
            EARLY_BLIGHT: {
                name: "Early blight",
                suggestion: `Treat organically with copper spray.
                Rotate crops and plant disease resistent hybrids.
                Give tomato plants extra space. 
                `
            },
            LATE_BLIGHT: {
                name: "Late blight",
                suggestion: `Water in the early morning hours, or use soaker hoses, to give plants time to dry out during the day — avoid overhead irrigation.
                            Apply a copper-based fungicide.`
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
                name: "Healthy",
                suggestion: 'Your tomato is healthy!'
            }
        }
    }
}