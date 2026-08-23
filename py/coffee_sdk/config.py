# Coffee SDK configuration


_shared_config = None


def shared_config():
    """Return the process-wide config, built once on first use.

    The SDK reads the config on every request and never writes to it, so one
    instance is shared by every client rather than rebuilt per client.

    The returned dict is shared: treat it as read-only. Callers that need to
    mutate should use make_config, which always returns a fresh copy.
    """
    global _shared_config
    if _shared_config is None:
        _shared_config = make_config()
    return _shared_config


def make_config():
    """Build a fresh, fully materialised config dict.

    Every call rebuilds the whole structure, so prefer shared_config unless
    you need a private copy you intend to mutate.
    """
    return {
        "main": {
            "name": "Coffee",
            "slug": "coffee",
            "version": "0.0.1",
            "target": "py",
        },
        "feature": {
            "test": {
        "options": {
          "active": False,
        },
      },
        },
        "options": {
            "base": "https://api.sampleapis.com",
            "headers": {
        "content-type": "application/json",
      },
            "entity": {
                "hot": {},
                "iced": {},
            },
        },
        "entity": {
      "hot": {
        "fields": [
          {
            "name": "description",
            "short": "Description of the coffee drink",
            "type": "`$STRING`",
          },
          {
            "name": "id",
            "short": "Unique identifier for the coffee drink",
            "type": "`$INTEGER`",
          },
          {
            "name": "image",
            "short": "URL to an image of the coffee drink",
            "type": "`$STRING`",
          },
          {
            "name": "ingredients",
            "short": "List of ingredients used in the coffee drink",
            "type": "`$ARRAY`",
          },
          {
            "name": "title",
            "short": "Name of the coffee drink",
            "type": "`$STRING`",
          },
        ],
        "name": "hot",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "args": {},
                "kind": "http",
                "method": "GET",
                "orig": "/coffee/hot",
                "parts": [
                  "coffee",
                  "hot",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "iced": {
        "fields": [
          {
            "name": "description",
            "short": "Description of the coffee drink",
            "type": "`$STRING`",
          },
          {
            "name": "id",
            "short": "Unique identifier for the coffee drink",
            "type": "`$INTEGER`",
          },
          {
            "name": "image",
            "short": "URL to an image of the coffee drink",
            "type": "`$STRING`",
          },
          {
            "name": "ingredients",
            "short": "List of ingredients used in the coffee drink",
            "type": "`$ARRAY`",
          },
          {
            "name": "title",
            "short": "Name of the coffee drink",
            "type": "`$STRING`",
          },
        ],
        "name": "iced",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "args": {},
                "kind": "http",
                "method": "GET",
                "orig": "/coffee/iced",
                "parts": [
                  "coffee",
                  "iced",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
