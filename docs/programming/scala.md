# Scala

## Examples

SBT startup: <https://www.scala-sbt.org/1.0/docs/sbt-by-example.html>

Write CSV: <https://dzone.com/articles/csv-file-writer-using-scala>

WebSocket Client: <https://doc.akka.io/docs/akka-http/current/client-side/websocket-support.html>

# SBT

```bash
sbt run                                      # runs your program
sbt sbtVersion                               # displays sbt version
sbt console                                  # opens REPL console
sbt compile                                  # compiles project
sbt clean                                    # clean
sbt package                                  # packages into one jar
sbt "test-only org.yourcompany.YourTestSpec" # runs a single test
sbt test                                     # runs every tests
sbt ";clean ;compile; run"                   # combines multiple commands in a single invocation
```

# VSCode Language Server

**First thing: Need to add the global plugin**
<http://ensime.github.io/build_tools/sbt/#install>

Then need to run `sbt ensimeConfig` in the root project.
