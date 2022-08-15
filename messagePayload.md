# Message payload
## Creating the first default message

- message doc
```json
{
    "type" : "text",
    "text" : {
        "skipLS" : true,
        "send_variable_to_apiai" : false,
        "sendVariableToLS" : true,
        "variable_name" : "userEnteredName",
        "delay" : 200,
        "disableAfterUserReply" : false,
        "action_before" : "getUserName",
        "quickReplies" : ["reply1", "reply2"],
        "inputLock" : false,
        "text" : ["Please enter your name"],
        "variations" : {},
        "variationList" : []
    }
}
```

## Creating a variation
- First Adding a language variation
  **French language**

| variations | 
|------------|
| Default |
| D + fr |

```json
{
    "type" : "text",
    "text" : {
        "skipLS" : true,
        "send_variable_to_apiai" : false,
        "sendVariableToLS" : true,
        "variable_name" : "userEnteredName",
        "delay" : 200,
        "disableAfterUserReply" : false,
        "action_before" : "getUserName",
        "quickReplies" : ["reply1", "reply2"],
        "inputLock" : false,
        "text" : ["Please enter your name"],
        "variations" : {
            "lang|fr" : {
                "language" : "fr",
                "status" : true,
                "message_doc" : {
                    "skipLS" : true,
                    "send_variable_to_apiai" : false,
                    "sendVariableToLS" : true,
                    "variable_name" : "userEnteredName",
                    "delay" : 200,
                    "disableAfterUserReply" : false,
                    "action_before" : "getUserName",
                    "quickReplies" : ["reply1", "reply2"],
                    "inputLock" : false,
                    "text" : ["C'est génial de parler avec toi"],
                }
            }
        },
        "variationList" : [
            {
                "variationType" : "language",
                "variationName" : "French",
                "variationAbbrev" : "fr"
            }
        ]
    }
}
```

- Adding a channel variation when one language variation is already present
  **whatsapp channel**

| variations | channels |
|------------|----------|
| Default | whatsapp(default) |
| French | wa + fr |

```json
{
    "type" : "text",
    "text" : {
        "skipLS" : true,
        "send_variable_to_apiai" : false,
        "sendVariableToLS" : true,
        "variable_name" : "userEnteredName",
        "delay" : 200,
        "disableAfterUserReply" : false,
        "action_before" : "getUserName",
        "quickReplies" : ["reply1", "reply2"],
        "inputLock" : false,
        "text" : ["Please enter your name"],
        "variations" : {
            "lang|fr" : {
                "language" : "fr",
                "status" : true,
                "message_doc" : {
                    "skipLS" : true,
                    "send_variable_to_apiai" : false,
                    "sendVariableToLS" : true,
                    "variable_name" : "userEnteredName",
                    "delay" : 200,
                    "disableAfterUserReply" : false,
                    "action_before" : "getUserName",
                    "quickReplies" : ["reply1", "reply2"],
                    "inputLock" : false,
                    "text" : ["C'est génial de parler avec toi"],
                }
            },
            "ch|wa_lang|fr" : {
                "language" : "fr",
                "channel" : "wa",
                "status" : true,
                "message_doc" : {
                    "skipLS" : true,
                    "send_variable_to_apiai" : false,
                    "sendVariableToLS" : true,
                    "variable_name" : "userEnteredName",
                    "delay" : 200,
                    "disableAfterUserReply" : false,
                    "action_before" : "getUserName",
                    "quickReplies" : ["reply1", "reply2"],
                    "inputLock" : false,
                    "text" : ["C'est génial de parler avec toi"],
                }
            },
            "ch|wa" : {
                "language" : "fr",
                "channel" : "wa",
                "status" : true,
                "message_doc" : {
                    "skipLS" : true,
                    "send_variable_to_apiai" : false,
                    "sendVariableToLS" : true,
                    "variable_name" : "userEnteredName",
                    "delay" : 200,
                    "disableAfterUserReply" : false,
                    "action_before" : "getUserName",
                    "quickReplies" : ["reply1", "reply2"],
                    "inputLock" : false,
                    "text" : ["Please enter your name"],
                }
            },
        },
        "variationList" : [
            {
                "variationType" : "language",
                "variationName" : "French",
                "variationAbbrev" : "fr"
            },
            {
                "variationType" : "channel",
                "variationName" : "Whatsapp",
                "variationAbbrev" : "wa"
            }
        ]
    }
}
```

- Adding a language variation when one language variation and one channel variation is already present
  
  **German language**


| variations | channels |
|------------|----------|
| Default | whatsapp(default) |
| D + fr | wa + fr |
| D + ge | wa + ge |

 ```json
{
    "type" : "text",
    "text" : {
        "skipLS" : true,
        "send_variable_to_apiai" : false,
        "sendVariableToLS" : true,
        "variable_name" : "userEnteredName",
        "delay" : 200,
        "disableAfterUserReply" : false,
        "action_before" : "getUserName",
        "quickReplies" : ["reply1", "reply2"],
        "inputLock" : false,
        "text" : ["Please enter your name"],
        "variations" : {
            "lang|fr" : {
                "language" : "fr",
                "status" : true,
                "message_doc" : {
                    "skipLS" : true,
                    "send_variable_to_apiai" : false,
                    "sendVariableToLS" : true,
                    "variable_name" : "userEnteredName",
                    "delay" : 200,
                    "disableAfterUserReply" : false,
                    "action_before" : "getUserName",
                    "quickReplies" : ["reply1", "reply2"],
                    "inputLock" : false,
                    "text" : ["C'est génial de parler avec toi"],
                }
            },
            "ch|wa_lang|fr" : {
                "language" : "fr",
                "channel" : "wa",
                "status" : true,
                "message_doc" : {
                    "skipLS" : true,
                    "send_variable_to_apiai" : false,
                    "sendVariableToLS" : true,
                    "variable_name" : "userEnteredName",
                    "delay" : 200,
                    "disableAfterUserReply" : false,
                    "action_before" : "getUserName",
                    "quickReplies" : ["reply1", "reply2"],
                    "inputLock" : false,
                    "text" : ["C'est génial de parler avec toi"],
                }
            },
            "ch|wa" : {
                "language" : "fr",
                "channel" : "wa",
                "status" : true,
                "message_doc" : {
                    "skipLS" : true,
                    "send_variable_to_apiai" : false,
                    "sendVariableToLS" : true,
                    "variable_name" : "userEnteredName",
                    "delay" : 200,
                    "disableAfterUserReply" : false,
                    "action_before" : "getUserName",
                    "quickReplies" : ["reply1", "reply2"],
                    "inputLock" : false,
                    "text" : ["Please enter your name"],
                }
            },
            "lang|ge" : {
                "language" : "ge",
                "status" : true,
                "message_doc" : {
                    "skipLS" : true,
                    "send_variable_to_apiai" : false,
                    "sendVariableToLS" : true,
                    "variable_name" : "userEnteredName",
                    "delay" : 200,
                    "disableAfterUserReply" : false,
                    "action_before" : "getUserName",
                    "quickReplies" : ["reply1", "reply2"],
                    "inputLock" : false,
                    "text" : ["C'est génial de parler avec toi"],
                }
            },
            "ch|wa_lang|ge" : {
                "language" : "ge",
                "channel" : "wa",
                "status" : true,
                "message_doc" : {
                    "skipLS" : true,
                    "send_variable_to_apiai" : false,
                    "sendVariableToLS" : true,
                    "variable_name" : "userEnteredName",
                    "delay" : 200,
                    "disableAfterUserReply" : false,
                    "action_before" : "getUserName",
                    "quickReplies" : ["reply1", "reply2"],
                    "inputLock" : false,
                    "text" : ["C'est génial de parler avec toi"],
                }
            },
        },
        "variationList" : [
            {
                "variationType" : "language",
                "variationName" : "French",
                "variationAbbrev" : "fr"
            },
            {
                "variationType" : "channel",
                "variationName" : "Whatsapp",
                "variationAbbrev" : "wa"
            },
            {
                "variationType" : "language",
                "variationName" : "German",
                "variationAbbrev" : "ge"
            }
        ]
    }
}
```

- Adding a country variation (parametric variation) when two language variation and one channel variation is already present
  
  **Oman country**


| variations | channels |
|------------|----------|
| Default| whatsapp(default) |
| D + fr | wa + fr |
| D + ge | wa + ge |
| D + om | wa + om |
| D + fr + om | wa + fr + om |
| D + ge + om | wa + ge + om |

 ```json
{
    "type" : "text",
    "text" : {
        "skipLS" : true,
        "send_variable_to_apiai" : false,
        "sendVariableToLS" : true,
        "variable_name" : "userEnteredName",
        "delay" : 200,
        "disableAfterUserReply" : false,
        "action_before" : "getUserName",
        "quickReplies" : ["reply1", "reply2"],
        "inputLock" : false,
        "text" : ["Please enter your name"],
        "variations" : {
            "lang|fr" : {
                "language" : "fr",
                "status" : true,
                "message_doc" : {
                    "skipLS" : true,
                    "send_variable_to_apiai" : false,
                    "sendVariableToLS" : true,
                    "variable_name" : "userEnteredName",
                    "delay" : 200,
                    "disableAfterUserReply" : false,
                    "action_before" : "getUserName",
                    "quickReplies" : ["reply1", "reply2"],
                    "inputLock" : false,
                    "text" : ["C'est génial de parler avec toi"],
                }
            },
            "ch|wa_lang|fr" : {
                "language" : "fr",
                "channel" : "wa",
                "status" : true,
                "message_doc" : {
                    "skipLS" : true,
                    "send_variable_to_apiai" : false,
                    "sendVariableToLS" : true,
                    "variable_name" : "userEnteredName",
                    "delay" : 200,
                    "disableAfterUserReply" : false,
                    "action_before" : "getUserName",
                    "quickReplies" : ["reply1", "reply2"],
                    "inputLock" : false,
                    "text" : ["C'est génial de parler avec toi"],
                }
            },
            "ch|wa" : {
                "language" : "fr",
                "channel" : "wa",
                "status" : true,
                "message_doc" : {
                    "skipLS" : true,
                    "send_variable_to_apiai" : false,
                    "sendVariableToLS" : true,
                    "variable_name" : "userEnteredName",
                    "delay" : 200,
                    "disableAfterUserReply" : false,
                    "action_before" : "getUserName",
                    "quickReplies" : ["reply1", "reply2"],
                    "inputLock" : false,
                    "text" : ["Please enter your name"],
                }
            },
            "lang|ge" : {
                "language" : "ge",
                "status" : true,
                "message_doc" : {
                    "skipLS" : true,
                    "send_variable_to_apiai" : false,
                    "sendVariableToLS" : true,
                    "variable_name" : "userEnteredName",
                    "delay" : 200,
                    "disableAfterUserReply" : false,
                    "action_before" : "getUserName",
                    "quickReplies" : ["reply1", "reply2"],
                    "inputLock" : false,
                    "text" : ["C'est génial de parler avec toi"],
                }
            },
            "ch|wa_lang|ge" : {
                "language" : "ge",
                "channel" : "wa",
                "status" : true,
                "message_doc" : {
                    "skipLS" : true,
                    "send_variable_to_apiai" : false,
                    "sendVariableToLS" : true,
                    "variable_name" : "userEnteredName",
                    "delay" : 200,
                    "disableAfterUserReply" : false,
                    "action_before" : "getUserName",
                    "quickReplies" : ["reply1", "reply2"],
                    "inputLock" : false,
                    "text" : ["C'est génial de parler avec toi"],
                }
            },
            "country|om" : {
                "language" : "fr",
                "channel" : "wa",
                "status" : true,
                "message_doc" : {
                    "skipLS" : true,
                    "send_variable_to_apiai" : false,
                    "sendVariableToLS" : true,
                    "variable_name" : "userEnteredName",
                    "delay" : 200,
                    "disableAfterUserReply" : false,
                    "action_before" : "getUserName",
                    "quickReplies" : ["reply1", "reply2"],
                    "inputLock" : false,
                    "text" : ["Please enter your name"],
                }
            },
            "ch|wa_country|om" : {
                "language" : "fr",
                "channel" : "wa",
                "status" : true,
                "message_doc" : {
                    "skipLS" : true,
                    "send_variable_to_apiai" : false,
                    "sendVariableToLS" : true,
                    "variable_name" : "userEnteredName",
                    "delay" : 200,
                    "disableAfterUserReply" : false,
                    "action_before" : "getUserName",
                    "quickReplies" : ["reply1", "reply2"],
                    "inputLock" : false,
                    "text" : ["Please enter your name"],
                }
            },
            "lang|fr_country|om" : {
                "language" : "fr",
                "channel" : "wa",
                "status" : true,
                "message_doc" : {
                    "skipLS" : true,
                    "send_variable_to_apiai" : false,
                    "sendVariableToLS" : true,
                    "variable_name" : "userEnteredName",
                    "delay" : 200,
                    "disableAfterUserReply" : false,
                    "action_before" : "getUserName",
                    "quickReplies" : ["reply1", "reply2"],
                    "inputLock" : false,
                    "text" : ["Please enter your name"],
                }
            },
            "ch|wa_lang|fr_country|om" : {
                "language" : "fr",
                "channel" : "wa",
                "status" : true,
                "message_doc" : {
                    "skipLS" : true,
                    "send_variable_to_apiai" : false,
                    "sendVariableToLS" : true,
                    "variable_name" : "userEnteredName",
                    "delay" : 200,
                    "disableAfterUserReply" : false,
                    "action_before" : "getUserName",
                    "quickReplies" : ["reply1", "reply2"],
                    "inputLock" : false,
                    "text" : ["Please enter your name"],
                }
            },
            "lang|ge_country|om" : {
                "language" : "fr",
                "channel" : "wa",
                "status" : true,
                "message_doc" : {
                    "skipLS" : true,
                    "send_variable_to_apiai" : false,
                    "sendVariableToLS" : true,
                    "variable_name" : "userEnteredName",
                    "delay" : 200,
                    "disableAfterUserReply" : false,
                    "action_before" : "getUserName",
                    "quickReplies" : ["reply1", "reply2"],
                    "inputLock" : false,
                    "text" : ["Please enter your name"],
                }
            },
            "ch|wa_lang|ge_country|om" : {
                "language" : "fr",
                "channel" : "wa",
                "status" : true,
                "message_doc" : {
                    "skipLS" : true,
                    "send_variable_to_apiai" : false,
                    "sendVariableToLS" : true,
                    "variable_name" : "userEnteredName",
                    "delay" : 200,
                    "disableAfterUserReply" : false,
                    "action_before" : "getUserName",
                    "quickReplies" : ["reply1", "reply2"],
                    "inputLock" : false,
                    "text" : ["Please enter your name"],
                }
            },
        },
        "variationList" : [
            {
                "variationType" : "language",
                "variationName" : "French",
                "variationAbbrev" : "fr"
            },
            {
                "variationType" : "channel",
                "variationName" : "Whatsapp",
                "variationAbbrev" : "wa"
            },
            {
                "variationType" : "language",
                "variationName" : "German",
                "variationAbbrev" : "ge"
            },
            {
                "variationType" : "country",
                "variationName" : "Oman",
                "variationAbbrev" : "om"
            }
        ]
    }
}
```

- Adding a channel variation when two language variation, one channel variation and one country variation is already present
  
  **facebook channel**


| variations | channel1 | channel2 |
|------------|----------|----------|
| Default| whatsapp(default)| facebook(default) |
| D + fr | wa + fr | fb + fr |
| D + ge | wa + ge | fb + ge |
| D + om | wa + om | fb + om |
| D + fr + om | wa + fr + om | fb + fr + om |
| D + ge + om | wa + ge + om | fb + ge + om |

 ```json
{
    "type" : "text",
    "text" : {
        "skipLS" : true,
        "send_variable_to_apiai" : false,
        "sendVariableToLS" : true,
        "variable_name" : "userEnteredName",
        "delay" : 200,
        "disableAfterUserReply" : false,
        "action_before" : "getUserName",
        "quickReplies" : ["reply1", "reply2"],
        "inputLock" : false,
        "text" : ["Please enter your name"],
        "variations" : {
            "lang|fr" : {
                "language" : "fr",
                "status" : true,
                "message_doc" : {
                    "skipLS" : true,
                    "send_variable_to_apiai" : false,
                    "sendVariableToLS" : true,
                    "variable_name" : "userEnteredName",
                    "delay" : 200,
                    "disableAfterUserReply" : false,
                    "action_before" : "getUserName",
                    "quickReplies" : ["reply1", "reply2"],
                    "inputLock" : false,
                    "text" : ["C'est génial de parler avec toi"],
                }
            },
            "ch|wa_lang|fr" : {
                "language" : "fr",
                "channel" : "wa",
                "status" : true,
                "message_doc" : {
                    "skipLS" : true,
                    "send_variable_to_apiai" : false,
                    "sendVariableToLS" : true,
                    "variable_name" : "userEnteredName",
                    "delay" : 200,
                    "disableAfterUserReply" : false,
                    "action_before" : "getUserName",
                    "quickReplies" : ["reply1", "reply2"],
                    "inputLock" : false,
                    "text" : ["C'est génial de parler avec toi"],
                }
            },
            "ch|wa" : {
                "language" : "fr",
                "channel" : "wa",
                "status" : true,
                "message_doc" : {
                    "skipLS" : true,
                    "send_variable_to_apiai" : false,
                    "sendVariableToLS" : true,
                    "variable_name" : "userEnteredName",
                    "delay" : 200,
                    "disableAfterUserReply" : false,
                    "action_before" : "getUserName",
                    "quickReplies" : ["reply1", "reply2"],
                    "inputLock" : false,
                    "text" : ["Please enter your name"],
                }
            },
            "lang|ge" : {
                "language" : "ge",
                "status" : true,
                "message_doc" : {
                    "skipLS" : true,
                    "send_variable_to_apiai" : false,
                    "sendVariableToLS" : true,
                    "variable_name" : "userEnteredName",
                    "delay" : 200,
                    "disableAfterUserReply" : false,
                    "action_before" : "getUserName",
                    "quickReplies" : ["reply1", "reply2"],
                    "inputLock" : false,
                    "text" : ["C'est génial de parler avec toi"],
                }
            },
            "ch|wa_lang|ge" : {
                "language" : "ge",
                "channel" : "wa",
                "status" : true,
                "message_doc" : {
                    "skipLS" : true,
                    "send_variable_to_apiai" : false,
                    "sendVariableToLS" : true,
                    "variable_name" : "userEnteredName",
                    "delay" : 200,
                    "disableAfterUserReply" : false,
                    "action_before" : "getUserName",
                    "quickReplies" : ["reply1", "reply2"],
                    "inputLock" : false,
                    "text" : ["C'est génial de parler avec toi"],
                }
            },
            "country|om" : {
                "language" : "fr",
                "channel" : "wa",
                "status" : true,
                "message_doc" : {
                    "skipLS" : true,
                    "send_variable_to_apiai" : false,
                    "sendVariableToLS" : true,
                    "variable_name" : "userEnteredName",
                    "delay" : 200,
                    "disableAfterUserReply" : false,
                    "action_before" : "getUserName",
                    "quickReplies" : ["reply1", "reply2"],
                    "inputLock" : false,
                    "text" : ["Please enter your name"],
                }
            },
            "ch|wa_country|om" : {
                "language" : "fr",
                "channel" : "wa",
                "status" : true,
                "message_doc" : {
                    "skipLS" : true,
                    "send_variable_to_apiai" : false,
                    "sendVariableToLS" : true,
                    "variable_name" : "userEnteredName",
                    "delay" : 200,
                    "disableAfterUserReply" : false,
                    "action_before" : "getUserName",
                    "quickReplies" : ["reply1", "reply2"],
                    "inputLock" : false,
                    "text" : ["Please enter your name"],
                }
            },
            "lang|fr_country|om" : {
                "language" : "fr",
                "channel" : "wa",
                "status" : true,
                "message_doc" : {
                    "skipLS" : true,
                    "send_variable_to_apiai" : false,
                    "sendVariableToLS" : true,
                    "variable_name" : "userEnteredName",
                    "delay" : 200,
                    "disableAfterUserReply" : false,
                    "action_before" : "getUserName",
                    "quickReplies" : ["reply1", "reply2"],
                    "inputLock" : false,
                    "text" : ["Please enter your name"],
                }
            },
            "ch|wa_lang|fr_country|om" : {
                "language" : "fr",
                "channel" : "wa",
                "status" : true,
                "message_doc" : {
                    "skipLS" : true,
                    "send_variable_to_apiai" : false,
                    "sendVariableToLS" : true,
                    "variable_name" : "userEnteredName",
                    "delay" : 200,
                    "disableAfterUserReply" : false,
                    "action_before" : "getUserName",
                    "quickReplies" : ["reply1", "reply2"],
                    "inputLock" : false,
                    "text" : ["Please enter your name"],
                }
            },
            "lang|ge_country|om" : {
                "language" : "fr",
                "channel" : "wa",
                "status" : true,
                "message_doc" : {
                    "skipLS" : true,
                    "send_variable_to_apiai" : false,
                    "sendVariableToLS" : true,
                    "variable_name" : "userEnteredName",
                    "delay" : 200,
                    "disableAfterUserReply" : false,
                    "action_before" : "getUserName",
                    "quickReplies" : ["reply1", "reply2"],
                    "inputLock" : false,
                    "text" : ["Please enter your name"],
                }
            },
            "ch|wa_lang|ge_country|om" : {
                "language" : "fr",
                "channel" : "wa",
                "status" : true,
                "message_doc" : {
                    "skipLS" : true,
                    "send_variable_to_apiai" : false,
                    "sendVariableToLS" : true,
                    "variable_name" : "userEnteredName",
                    "delay" : 200,
                    "disableAfterUserReply" : false,
                    "action_before" : "getUserName",
                    "quickReplies" : ["reply1", "reply2"],
                    "inputLock" : false,
                    "text" : ["Please enter your name"],
                }
            },
            "ch|fb" : {
                "channel" : "fb",
                "status" : true,
                "message_doc" : {
                    "skipLS" : true,
                    "send_variable_to_apiai" : false,
                    "sendVariableToLS" : true,
                    "variable_name" : "userEnteredName",
                    "delay" : 200,
                    "disableAfterUserReply" : false,
                    "action_before" : "getUserName",
                    "quickReplies" : ["reply1", "reply2"],
                    "inputLock" : false,
                    "text" : ["C'est génial de parler avec toi"],
                }
            },
            "ch|fb_lang|fr" : {
                "language" : "fr",
                "channel" : "fb",
                "status" : true,
                "message_doc" : {
                    "skipLS" : true,
                    "send_variable_to_apiai" : false,
                    "sendVariableToLS" : true,
                    "variable_name" : "userEnteredName",
                    "delay" : 200,
                    "disableAfterUserReply" : false,
                    "action_before" : "getUserName",
                    "quickReplies" : ["reply1", "reply2"],
                    "inputLock" : false,
                    "text" : ["C'est génial de parler avec toi"],
                }
            },
            "ch|fb_lang|ge" : {
                "language" : "ge",
                "channel" : "fb",
                "status" : true,
                "message_doc" : {
                    "skipLS" : true,
                    "send_variable_to_apiai" : false,
                    "sendVariableToLS" : true,
                    "variable_name" : "userEnteredName",
                    "delay" : 200,
                    "disableAfterUserReply" : false,
                    "action_before" : "getUserName",
                    "quickReplies" : ["reply1", "reply2"],
                    "inputLock" : false,
                    "text" : ["C'est génial de parler avec toi"],
                }
            },
            "ch|fb_country|om" : {
                "language" : "fr",
                "channel" : "fb",
                "status" : true,
                "message_doc" : {
                    "skipLS" : true,
                    "send_variable_to_apiai" : false,
                    "sendVariableToLS" : true,
                    "variable_name" : "userEnteredName",
                    "delay" : 200,
                    "disableAfterUserReply" : false,
                    "action_before" : "getUserName",
                    "quickReplies" : ["reply1", "reply2"],
                    "inputLock" : false,
                    "text" : ["Please enter your name"],
                }
            },
            "ch|fb_lang|fr_country|om" : {
                "language" : "fr",
                "channel" : "fb",
                "status" : true,
                "message_doc" : {
                    "skipLS" : true,
                    "send_variable_to_apiai" : false,
                    "sendVariableToLS" : true,
                    "variable_name" : "userEnteredName",
                    "delay" : 200,
                    "disableAfterUserReply" : false,
                    "action_before" : "getUserName",
                    "quickReplies" : ["reply1", "reply2"],
                    "inputLock" : false,
                    "text" : ["Please enter your name"],
                }
            },
            "ch|fb_lang|ge_country|om" : {
                "language" : "fr",
                "channel" : "fb",
                "status" : true,
                "message_doc" : {
                    "skipLS" : true,
                    "send_variable_to_apiai" : false,
                    "sendVariableToLS" : true,
                    "variable_name" : "userEnteredName",
                    "delay" : 200,
                    "disableAfterUserReply" : false,
                    "action_before" : "getUserName",
                    "quickReplies" : ["reply1", "reply2"],
                    "inputLock" : false,
                    "text" : ["Please enter your name"],
                }
            },
        },
        "variationList" : [
            {
                "variationType" : "language",
                "variationName" : "French",
                "variationAbbrev" : "fr"
            },
            {
                "variationType" : "channel",
                "variationName" : "Whatsapp",
                "variationAbbrev" : "wa"
            },
            {
                "variationType" : "language",
                "variationName" : "German",
                "variationAbbrev" : "ge"
            },
            {
                "variationType" : "country",
                "variationName" : "Oman",
                "variationAbbrev" : "om"
            },
            {
                "variationType" : "channel",
                "variationName" : "Facebook",
                "variationAbbrev" : "fb"
            }
        ]
    }
}
```
