const endpoints = [
    {
        "hook": "/login",
        "method": "POST",
        "description": "The login endpoint is used to attempt user login.",
        "params": [
            {
                "name": "email",
                "data_type": "string",
                "required": "true",
                "location": "body"
            },
            {
                "name": "password",
                "data_type": "string",
                "required": "true",
                "location": "body"
            }
        ],
        "input": {
            "email": "jammanager.io@gmail.com",
            "password": "ILoveJamming"
        },
        "output": {
            "message": "Login successful",
            "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJlOThkNDJiYy1kZTY2LTRhODEtYTlhNS0zZTFiMDY1N2I4NTgiLCJpYXQiOjE3MDI2NjU4NjgsImV4cCI6MTcwMjcwOTA2OH0.cDo1nvm3SoZ9QaXzPT79aJInN2d79cbv-yuulAvXNog"
        }
    },
    {
        "hook": "/signup",
        "method": "POST",
        "description": "The signup endpoint is used to register a new user.",
        "params": [
            {
                "name": "email",
                "data_type": "string",
                "required": "true",
                "location": "body"
            },
            {
                "name": "password",
                "data_type": "string",
                "required": "true",
                "location": "body"
            }
        ],
        "input": {
            "email": "jammanager.io@gmail.com",
            "password": "ILoveJamming"
        },
        "output": {
            "message": "User Registered",
            "user": {
                "jam_groups": [
                    "a6aa1568-c1ab-4cce-8b7f-d25216abb8dc"
                ],
                "jam_tasks": [],
                "jam_notes": [],
                "username": "user_2960672164",
                "password": "$2b$10$lrxuSKJAM0T.Z0PvZq3pq.U/d44BN9BdKmAwGJ0ttc8wxu4fWFQWq",
                "email": "jammanager.io@gmail.com",
                "user_id": "e98d42bc-de66-4a81-a9a5-3e1b0657b858",
                "_id": "e98d42bc-de66-4a81-a9a5-3e1b0657b858",
                "__v": 0
            },
            "user_group": {
                "users": [
                    "e98d42bc-de66-4a81-a9a5-3e1b0657b858"
                ],
                "jam_notes": [],
                "jam_id": [],
                "title": "user_2960672164's Jam",
                "host_id": "e98d42bc-de66-4a81-a9a5-3e1b0657b858",
                "created_timestamp": "1702641068742",
                "jam_group_id": "a6aa1568-c1ab-4cce-8b7f-d25216abb8dc",
                "join_code": "",
                "_id": "a6aa1568-c1ab-4cce-8b7f-d25216abb8dc",
                "__v": 0
            },
            "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJlOThkNDJiYy1kZTY2LTRhODEtYTlhNS0zZTFiMDY1N2I4NTgiLCJqYW1Hcm91cCI6ImE2YWExNTY4LWMxYWItNGNjZS04YjdmLWQyNTIxNmFiYjhkYyIsImlhdCI6MTcwMjY0MTA2OCwiZXhwIjoxNzAyNjg0MjY4fQ.zmbvW5kMRU_ZC-cXYQylo4lw8JsZ55TpvdF9iq2pGJY"
        }
    },
    {
        "hook": "/user",
        "method": "PUT",
        "description": "This endpoint serves to updated the user object. The JWT (token) provided is linked to the user upon creation and will allow the backend to do a search for the user attempting to be updated.",
        "params": [
            {
                "name": "Authorization",
                "data_type": "string",
                "required": "true",
                "location": "header"
            },
            {
                "name": "username",
                "data_type": "string",
                "required": "false",
                "location": "body"
            },
            {
                "name": "email",
                "data_type": "string",
                "required": "not allowed",
                "location": "body"
            },
            {
                "name": "password",
                "data_type": "string",
                "required": "not allowed",
                "location": "body"
            },
            {
                "name": "user_id",
                "data_type": "string",
                "required": "not allowed",
                "location": "body"
            },
            {
                "name": "profile_image_url",
                "data_type": "string",
                "required": "false",
                "location": "body"
            }
        ],
        "input": {
            "email": "jammanager.io@gmail.com",
            "password": "ILoveJamming"
        },
        "output": {
            "message": "User Registered",
            "user": {
                "jam_groups": [
                    "a6aa1568-c1ab-4cce-8b7f-d25216abb8dc"
                ],
                "jam_tasks": [],
                "jam_notes": [],
                "username": "user_2960672164",
                "password": "$2b$10$lrxuSKJAM0T.Z0PvZq3pq.U/d44BN9BdKmAwGJ0ttc8wxu4fWFQWq",
                "email": "jammanager.io@gmail.com",
                "user_id": "e98d42bc-de66-4a81-a9a5-3e1b0657b858",
                "_id": "e98d42bc-de66-4a81-a9a5-3e1b0657b858",
                "__v": 0
            },
            "user_group": {
                "users": [
                    "e98d42bc-de66-4a81-a9a5-3e1b0657b858"
                ],
                "jam_notes": [],
                "jam_id": [],
                "title": "user_2960672164's Jam",
                "host_id": "e98d42bc-de66-4a81-a9a5-3e1b0657b858",
                "created_timestamp": "1702641068742",
                "jam_group_id": "a6aa1568-c1ab-4cce-8b7f-d25216abb8dc",
                "join_code": "",
                "_id": "a6aa1568-c1ab-4cce-8b7f-d25216abb8dc",
                "__v": 0
            },
            "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJlOThkNDJiYy1kZTY2LTRhODEtYTlhNS0zZTFiMDY1N2I4NTgiLCJqYW1Hcm91cCI6ImE2YWExNTY4LWMxYWItNGNjZS04YjdmLWQyNTIxNmFiYjhkYyIsImlhdCI6MTcwMjY0MTA2OCwiZXhwIjoxNzAyNjg0MjY4fQ.zmbvW5kMRU_ZC-cXYQylo4lw8JsZ55TpvdF9iq2pGJY"
        }
    },
    {
        "hook": "/jam_groups",
        "method": "POST",
        "description": "This endpoint creates a new Jam Group.",
        "params": [
            {
                "name": "Authorization",
                "data_type": "string",
                "required": "true",
                "location": "header"
            },
            {
                "name": "username",
                "data_type": "string",
                "required": "false",
                "location": "body"
            },
            {
                "name": "email",
                "data_type": "string",
                "required": "not allowed",
                "location": "body"
            },
            {
                "name": "password",
                "data_type": "string",
                "required": "not allowed",
                "location": "body"
            },
            {
                "name": "user_id",
                "data_type": "string",
                "required": "not allowed",
                "location": "body"
            },
            {
                "name": "profile_image_url",
                "data_type": "string",
                "required": "false",
                "location": "body"
            }
        ],
        "input": {
            "email": "jammanager.io@gmail.com",
            "password": "ILoveJamming"
        },
        "output": {
            "message": "User Registered",
            "user": {
                "jam_groups": [
                    "a6aa1568-c1ab-4cce-8b7f-d25216abb8dc"
                ],
                "jam_tasks": [],
                "jam_notes": [],
                "username": "user_2960672164",
                "password": "$2b$10$lrxuSKJAM0T.Z0PvZq3pq.U/d44BN9BdKmAwGJ0ttc8wxu4fWFQWq",
                "email": "jammanager.io@gmail.com",
                "user_id": "e98d42bc-de66-4a81-a9a5-3e1b0657b858",
                "_id": "e98d42bc-de66-4a81-a9a5-3e1b0657b858",
                "__v": 0
            },
            "user_group": {
                "users": [
                    "e98d42bc-de66-4a81-a9a5-3e1b0657b858"
                ],
                "jam_notes": [],
                "jam_id": [],
                "title": "user_2960672164's Jam",
                "host_id": "e98d42bc-de66-4a81-a9a5-3e1b0657b858",
                "created_timestamp": "1702641068742",
                "jam_group_id": "a6aa1568-c1ab-4cce-8b7f-d25216abb8dc",
                "join_code": "",
                "_id": "a6aa1568-c1ab-4cce-8b7f-d25216abb8dc",
                "__v": 0
            },
            "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJlOThkNDJiYy1kZTY2LTRhODEtYTlhNS0zZTFiMDY1N2I4NTgiLCJqYW1Hcm91cCI6ImE2YWExNTY4LWMxYWItNGNjZS04YjdmLWQyNTIxNmFiYjhkYyIsImlhdCI6MTcwMjY0MTA2OCwiZXhwIjoxNzAyNjg0MjY4fQ.zmbvW5kMRU_ZC-cXYQylo4lw8JsZ55TpvdF9iq2pGJY"
        }
    },
    {
        "hook": "/user",
        "method": "GET",
        "description": "Use this endpoint to fetch the current user",
        "params": [
            {
                "name": "Authorization",
                "data_type": "string",
                "required": "true",
                "location": "header"
            },
            {
                "name": "expanded",
                "data_type": "string",
                "required": "false",
                "location": "params"
            }
        ],
        "input": {
        },
        "output": {
            "message": "Compiled User",
            "compiled_user": {
                "user_id": "e98d42bc-de66-4a81-a9a5-3e1b0657b858",
                "user_groups": [
                    {
                        "users": [
                            "e98d42bc-de66-4a81-a9a5-3e1b0657b858"
                        ],
                        "jam_notes": [],
                        "jam_id": [],
                        "_id": "a6aa1568-c1ab-4cce-8b7f-d25216abb8dc",
                        "title": "user_2960672164's Jam",
                        "host_id": "e98d42bc-de66-4a81-a9a5-3e1b0657b858",
                        "created_timestamp": "1702641068742",
                        "jam_group_id": "a6aa1568-c1ab-4cce-8b7f-d25216abb8dc",
                        "join_code": "",
                        "__v": 0
                    }
                ],
                "jam_ids": [],
                "user_jams": [],
                "user": {
                    "jam_groups": [
                        "a6aa1568-c1ab-4cce-8b7f-d25216abb8dc"
                    ],
                    "jam_tasks": [],
                    "jam_notes": [],
                    "_id": "e98d42bc-de66-4a81-a9a5-3e1b0657b858",
                    "username": "user_2960672164",
                    "password": "$2b$10$lrxuSKJAM0T.Z0PvZq3pq.U/d44BN9BdKmAwGJ0ttc8wxu4fWFQWq",
                    "email": "jammanager.io@gmail.com",
                    "user_id": "e98d42bc-de66-4a81-a9a5-3e1b0657b858",
                    "__v": 0
                }
            }
        }
    },
    {
        "hook": "/jam_group",
        "method": "POST",
        "description": "Use this endpoint to create a new jam group",
        "params": [
            {
                "name": "Authorization",
                "data_type": "string",
                "required": "true",
                "location": "header"
            },
            {
                "name": "title",
                "data_type": "string",
                "required": "true",
                "location": "body"
            },
            {
                "name": "users",
                "data_type": "array",
                "required": "false",
                "location": "body"
            },
            {
                "name": "join_code",
                "data_type": "string",
                "required": "false",
                "location": "body"
            }
        ],
        "input": {
            "title": "Daniel Carmichael's Jam Group",
            "users": [],
            "host_id": "145ecb64-d30a-4bc5-acf0-8fbc5a4325fa",
            "join_code": "join"
        },
        "output": {
            "message": "Jam Group Created",
            "jamGroup": {
                "users": [
                    "145ecb64-d30a-4bc5-acf0-8fbc5a4325fa"
                ],
                "jam_notes": [],
                "jam_id": [],
                "title": "Daniel Carmichael's Jam Group",
                "host_id": "145ecb64-d30a-4bc5-acf0-8fbc5a4325fa",
                "created_timestamp": "1702593648190",
                "jam_group_id": "16bab215-6956-4da5-ae04-e2a7cd08cdfc",
                "join_code": "join",
                "_id": "16bab215-6956-4da5-ae04-e2a7cd08cdfc",
                "__v": 0
            }
        }
    },
    {
        "hook": "/jam_group/:id",
        "method": "DELETE",
        "description": "Use this endpoint to delete a jam group",
        "params": [
            {
                "name": "Authorization",
                "data_type": "string",
                "required": "true",
                "location": "header"
            },
            {
                "name": "id",
                "data_type": "string",
                "required": "true",
                "location": "params"
            }
        ],
        "input": {},
        "output": {
            "message": "Jam Group deleted successfully",
            "deletedJamGroup": {
                "users": [
                    "user_4699380832_1702628387895"
                ],
                "jam_notes": [],
                "jam_id": [],
                "_id": "7eca26bc-6dc7-4a84-9049-be88ecd293ec",
                "title": "Renamed Jam Group",
                "host_id": "user_4699380832_1702628387895",
                "created_timestamp": "1702628388120",
                "jam_group_id": "7eca26bc-6dc7-4a84-9049-be88ecd293ec",
                "join_code": "",
                "__v": 0
            }
        }
    },
    {
        "hook": "/jam_groups/:id",
        "method": "PUT",
        "description": "Use this endpoint to update a jam group",
        "params": [
            {
                "name": "Authorization",
                "data_type": "string",
                "required": "true",
                "location": "header"
            },
            {
                "name": "id",
                "data_type": "string",
                "required": "true",
                "location": "params"
            },
            {
                "name": "title",
                "data_type": "string",
                "required": "false",
                "location": "body"
            },
            {
                "name": "users",
                "data_type": "array",
                "required": "false",
                "location": "body"
            },
            {
                "name": "host_id",
                "data_type": "string",
                "required": "false",
                "location": "body"
            },
            {
                "name": "jam_notes",
                "data_type": "array",
                "required": "false",
                "location": "body"
            },
            {
                "name": "join_code",
                "data_type": "string",
                "required": "false",
                "location": "body"
            },
            {
                "name": "subscribe",
                "data_type": "string",
                "required": "false",
                "location": "body"
            }
        ],
        "input": {
            "title": "Renamed Jam Group"
        },
        "output": {
            "message": "Jam Group updated successfully",
            "updatedJamGroup": {
                "users": [
                    "user_4699380832_1702628387895"
                ],
                "jam_notes": [],
                "jam_id": [],
                "_id": "7eca26bc-6dc7-4a84-9049-be88ecd293ec",
                "title": "Renamed Jam Group",
                "host_id": "user_4699380832_1702628387895",
                "created_timestamp": "1702628388120",
                "jam_group_id": "7eca26bc-6dc7-4a84-9049-be88ecd293ec",
                "join_code": "",
                "__v": 0
            }
        }
    },
    {
        "hook": "/join_groups/:id",
        "method": "POST",
        "description": "Use this endpoint to subscribe a user to a jam group",
        "params": [
            {
                "name": "Authorization",
                "data_type": "string",
                "required": "true",
                "location": "header"
            },
            {
                "name": "id",
                "data_type": "string",
                "required": "true",
                "location": "params"
            }
        ],
        "input": {
            "join_code": "join"
        },
        "output": {
            "message": "User joined the group successfully"
        }
    },
    {
        "hook": "/create_jam",
        "method": "POST",
        "description": "Use this endpoint to create a jam.",
        "params": [
            {
                "name": "Authorization",
                "data_type": "string",
                "required": "true",
                "location": "header"
            },
            {
                "name": "title",
                "data_type": "string",
                "required": "true",
                "location": "body"
            },
            {
                "name": "time_limit",
                "data_type": "number",
                "required": "true",
                "location": "body"
            },
            {
                "name": "jam_url",
                "data_type": "string",
                "required": "false",
                "location": "body"
            },
            {
                "name": "options",
                "data_type": "string",
                "required": "false",
                "location": "body"
            },
            {
                "name": "image_url",
                "data_type": "string",
                "required": "false",
                "location": "body"
            },
            {
                "name": "jam_tasks",
                "data_type": "array",
                "required": "false",
                "location": "body"
            },
            {
                "name": "jam_notes",
                "data_type": "array",
                "required": "false",
                "location": "body"
            }
        ],
        "input": {
            "title": "Daniel's Jam",
            "time_limit": 32,
            "jam_url": "google.com",
            "jam_group_id": "16bab215-6956-4da5-ae04-e2a7cd08cdfc"
        },
        "output": {
            "message": "Jam Created",
            "jam": {
                "jam_tasks": [],
                "jam_notes": [],
                "title": "Daniel's Jam",
                "time_limit": 32,
                "created_timestamp": "1702603288565",
                "jam_url": "google.com",
                "options": "{}",
                "image_url": "",
                "jam_group_id": "16bab215-6956-4da5-ae04-e2a7cd08cdfc",
                "jam_group": {
                    "users": [
                        "145ecb64-d30a-4bc5-acf0-8fbc5a4325fa",
                        "1d3f6e31-375d-4f7d-8d2b-5b0e2bb0eaab"
                    ],
                    "jam_notes": [],
                    "jam_id": [],
                    "_id": "16bab215-6956-4da5-ae04-e2a7cd08cdfc",
                    "title": "Daniel Carmichael's Jam Group",
                    "host_id": "145ecb64-d30a-4bc5-acf0-8fbc5a4325fa",
                    "created_timestamp": "1702593648190",
                    "jam_group_id": "16bab215-6956-4da5-ae04-e2a7cd08cdfc",
                    "join_code": "join",
                    "__v": 1
                },
                "_id": "a7f5c90b-36d9-4ad8-a3d5-4416eb034d2c",
                "__v": 0
            }
        }
    },
    {
        "hook": "/jam_group/:id",
        "method": "GET",
        "description": "Use this endpoint to retrieve a jam group.",
        "params": [
            {
                "name": "Authorization",
                "data_type": "string",
                "required": "true",
                "location": "header"
            },
            {
                "name": "id",
                "data_type": "string",
                "required": "true",
                "location": "params"
            }
        ],
        "input": {},
        "output": {
            "message": "User groups found",
            "jam_groups": [
                {
                    "users": [
                        "e98d42bc-de66-4a81-a9a5-3e1b0657b858"
                    ],
                    "jam_notes": [],
                    "jam_id": [],
                    "_id": "a6aa1568-c1ab-4cce-8b7f-d25216abb8dc",
                    "title": "user_2960672164's Jam",
                    "host_id": "e98d42bc-de66-4a81-a9a5-3e1b0657b858",
                    "created_timestamp": "1702641068742",
                    "jam_group_id": "a6aa1568-c1ab-4cce-8b7f-d25216abb8dc",
                    "join_code": "",
                    "__v": 0
                }
            ]
        }
    },
    {
        "hook": "/jams/:group_id",
        "method": "GET",
        "description": "Use this endpoint to retrieve all jams for a jam group or retrieve all jams for the authenticating user.",
        "params": [
            {
                "name": "Authorization",
                "data_type": "string",
                "required": "true",
                "location": "header"
            },
            {
                "name": "group_id",
                "data_type": "string",
                "required": "false",
                "location": "params"
            }
        ],
        "input": {},
        "output": {
            "message": "Jams Found",
            "count": 2,
            "jams": [
                {
                    "jam_tasks": [],
                    "jam_notes": [],
                    "_id": "c97d25d2-99c4-48de-af9e-a5b4ccc5b56d",
                    "title": "Daniel's Jam",
                    "time_limit": 32,
                    "created_timestamp": "1702601282386",
                    "jam_url": "google.com",
                    "options": "{}",
                    "image_url": "",
                    "jam_group_id": "16bab215-6956-4da5-ae04-e2a7cd08cdfc",
                    "jam_group": {
                        "users": [
                            "145ecb64-d30a-4bc5-acf0-8fbc5a4325fa",
                            "1d3f6e31-375d-4f7d-8d2b-5b0e2bb0eaab"
                        ],
                        "jam_notes": [],
                        "jam_id": [],
                        "_id": "16bab215-6956-4da5-ae04-e2a7cd08cdfc",
                        "title": "Daniel Carmichael's Jam Group",
                        "host_id": "145ecb64-d30a-4bc5-acf0-8fbc5a4325fa",
                        "created_timestamp": "1702593648190",
                        "jam_group_id": "16bab215-6956-4da5-ae04-e2a7cd08cdfc",
                        "join_code": "join",
                        "__v": 1
                    },
                    "__v": 0
                },
                {
                    "jam_tasks": [],
                    "jam_notes": [],
                    "_id": "a7f5c90b-36d9-4ad8-a3d5-4416eb034d2c",
                    "title": "Daniel's Jam",
                    "time_limit": 32,
                    "created_timestamp": "1702603288565",
                    "jam_url": "google.com",
                    "options": "{}",
                    "image_url": "",
                    "jam_group_id": "16bab215-6956-4da5-ae04-e2a7cd08cdfc",
                    "jam_group": {
                        "users": [
                            "145ecb64-d30a-4bc5-acf0-8fbc5a4325fa",
                            "1d3f6e31-375d-4f7d-8d2b-5b0e2bb0eaab"
                        ],
                        "jam_notes": [],
                        "jam_id": [],
                        "_id": "16bab215-6956-4da5-ae04-e2a7cd08cdfc",
                        "title": "Daniel Carmichael's Jam Group",
                        "host_id": "145ecb64-d30a-4bc5-acf0-8fbc5a4325fa",
                        "created_timestamp": "1702593648190",
                        "jam_group_id": "16bab215-6956-4da5-ae04-e2a7cd08cdfc",
                        "join_code": "join",
                        "__v": 1
                    },
                    "__v": 0
                }
            ]
        }
    },
    {
        "hook": "/jam_note/:jam_id",
        "method": "POST",
        "description": "Use this endpoint to retrieve all jams for a jam group or retrieve all jams for the authenticating user.",
        "params": [
            {
                "name": "Authorization",
                "data_type": "string",
                "required": "true",
                "location": "header"
            },
            {
                "name": "jam_id",
                "data_type": "string",
                "required": "true",
                "location": "params"
            },
            {
                "name": "note",
                "data_type": "string",
                "required": "true",
                "location": "body"
            },
            {
                "name": "jam_group_id",
                "data_type": "string",
                "required": "true",
                "location": "body"
            }
        ],
        "input": {
            "note":"Looks Bad!",
            "jam_group_id": "16bab215-6956-4da5-ae04-e2a7cd08cdfc"
        },
        "output": {
            "message": "JamNote Created",
            "jam_note": {
                "note": "Looks Bad!",
                "jam_id": "a7f5c90b-36d9-4ad8-a3d5-4416eb034d2c",
                "user_id": "1d3f6e31-375d-4f7d-8d2b-5b0e2bb0eaab",
                "jam_group_id": "16bab215-6956-4da5-ae04-e2a7cd08cdfc",
                "created_timestamp": "1702617551543",
                "_id": "80c00118-8190-420d-9773-feb11512164d",
                "__v": 0
            }
        }
    },
    {
        "hook": "/jam_note/user",
        "method": "GET",
        "description": "Use this endpoint to retrieve all jam notes for the authenticating user.",
        "params": [
            {
                "name": "Authorization",
                "data_type": "string",
                "required": "true",
                "location": "header"
            }
        ],
        "input": {},
        "output": {
            "message": "JamNotes retrieved successfully",
            "jamNotes": [
                {
                    "_id": "66b61068-edd2-41ba-99c0-387638c9eeb0",
                    "note": "Looks Great!",
                    "jam_id": "a7f5c90b-36d9-4ad8-a3d5-4416eb034d2c",
                    "user_id": "1d3f6e31-375d-4f7d-8d2b-5b0e2bb0eaab",
                    "jam_group_id": "16bab215-6956-4da5-ae04-e2a7cd08cdfc",
                    "created_timestamp": "1702616909742",
                    "__v": 0
                },
                {
                    "_id": "80c00118-8190-420d-9773-feb11512164d",
                    "note": "Looks Bad!",
                    "jam_id": "a7f5c90b-36d9-4ad8-a3d5-4416eb034d2c",
                    "user_id": "1d3f6e31-375d-4f7d-8d2b-5b0e2bb0eaab",
                    "jam_group_id": "16bab215-6956-4da5-ae04-e2a7cd08cdfc",
                    "created_timestamp": "1702617551543",
                    "__v": 0
                }
            ]
        }
    },
    {
        "hook": "/jam_note/:jam_id",
        "method": "GET",
        "description": "Use this endpoint to retrieve all jam notes for a specific jam.",
        "params": [
            {
                "name": "Authorization",
                "data_type": "string",
                "required": "true",
                "location": "header"
            },
            {
                "name": "jam_id",
                "data_type": "string",
                "required": "true",
                "location": "param"
            },
        ],
        "input": {},
        "output": {
            "message": "JamNotes retrieved successfully",
            "jamNotes": [
                {
                    "_id": "66b61068-edd2-41ba-99c0-387638c9eeb0",
                    "note": "Looks Great!",
                    "jam_id": "a7f5c90b-36d9-4ad8-a3d5-4416eb034d2c",
                    "user_id": "1d3f6e31-375d-4f7d-8d2b-5b0e2bb0eaab",
                    "jam_group_id": "16bab215-6956-4da5-ae04-e2a7cd08cdfc",
                    "created_timestamp": "1702616909742",
                    "__v": 0
                },
                {
                    "_id": "80c00118-8190-420d-9773-feb11512164d",
                    "note": "Looks Bad!",
                    "jam_id": "a7f5c90b-36d9-4ad8-a3d5-4416eb034d2c",
                    "user_id": "1d3f6e31-375d-4f7d-8d2b-5b0e2bb0eaab",
                    "jam_group_id": "16bab215-6956-4da5-ae04-e2a7cd08cdfc",
                    "created_timestamp": "1702617551543",
                    "__v": 0
                }
            ]
        }
    },
    {
        "hook": "/jam_task/:task_id",
        "method": "GET",
        "description": "Use this endpoint to retrieve a single jam task",
        "params": [
            {
                "name": "Authorization",
                "data_type": "string",
                "required": "true",
                "location": "header"
            },
            {
                "name": "task_id",
                "data_type": "string",
                "required": "true",
                "location": "param"
            }
        ],
        "input": {},
        "output": {}
    },
    {
        "hook": "/jam_task/:jam_id",
        "method": "POST",
        "description": "Use this endpoint to create a jam task for a specific jam.",
        "params": [
            {
                "name": "Authorization",
                "data_type": "string",
                "required": "true",
                "location": "header"
            },
            {
                "name": "jam_id",
                "data_type": "string",
                "required": "true",
                "location": "param"
            },
            {
                "name": "title",
                "data_type": "string",
                "required": "true",
                "location": "body"
            },
            {
                "name": "users",
                "data_type": "array",
                "required": "true",
                "location": "body"
            },
            {
                "name": "complete_by_timestamp",
                "data_type": "string",
                "required": "true",
                "location": "body"
            },
        ],
        "input": {},
        "output": {}
    },
]

export default endpoints;