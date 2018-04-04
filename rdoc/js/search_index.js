var search_data = {"index":{"searchIndex":["evnt","command","event","handler","query","queryactiverecord","validator","as_bytes()","as_bytes()","as_json()","as_json()","as_string()","as_string()","completed?()","err()","error_codes()","error_messages()","errors()","new()","new()","new()","new()","notify()","passed?()","reloaded?()","saved?()","set_not_saved()","changelog","mit-license","readme"],"longSearchIndex":["evnt","evnt::command","evnt::event","evnt::handler","evnt::query","evnt::queryactiverecord","evnt::validator","evnt::query::as_bytes()","evnt::queryactiverecord::as_bytes()","evnt::query::as_json()","evnt::queryactiverecord::as_json()","evnt::query::as_string()","evnt::queryactiverecord::as_string()","evnt::command#completed?()","evnt::command#err()","evnt::command#error_codes()","evnt::command#error_messages()","evnt::command#errors()","evnt::command::new()","evnt::event::new()","evnt::query::new()","evnt::validator::new()","evnt::handler#notify()","evnt::validator#passed?()","evnt::event#reloaded?()","evnt::event#saved?()","evnt::event#set_not_saved()","","",""],"info":[["Evnt","","Evnt.html","","<p>Evnt is a gem developed to integrate a event driven development and CQRS\npattern inside a ruby project. …\n"],["Evnt::Command","","Evnt/Command.html","","<p>Commands are used to run single tasks on the system. It&#39;s like a\ncontroller on an MVC architecture …\n"],["Evnt::Event","","Evnt/Event.html","","<p>Events are used to save on a persistent data structure what happends on the\nsystem.\n"],["Evnt::Handler","","Evnt/Handler.html","","<p>Handlers are used to listen one or more events and run tasks after their\nexecution.\n"],["Evnt::Query","","Evnt/Query.html","","<p>Queries are used to read and prepare data from the database to the client.\nThe Query class should contain …\n"],["Evnt::QueryActiverecord","","Evnt/QueryActiverecord.html","","<p>Queries are used to read and prepare data from the database to the client.\nThe QueryActivercord class …\n"],["Evnt::Validator","","Evnt/Validator.html","","<p>Validator is a class used to validates params and attributes automatically.\n"],["as_bytes","Evnt::Query","Evnt/Query.html#method-c-as_bytes","(_query, _parameters = {})",""],["as_bytes","Evnt::QueryActiverecord","Evnt/QueryActiverecord.html#method-c-as_bytes","(query, parameters = {})","<p>This function should run a query and return the result as a bytes array.\n<p>Attributes\n<p><code>query</code> - The name of …\n"],["as_json","Evnt::Query","Evnt/Query.html#method-c-as_json","(_query, _parameters = {})",""],["as_json","Evnt::QueryActiverecord","Evnt/QueryActiverecord.html#method-c-as_json","(query, parameters = {})","<p>This function should run a query and return the result as a hash/json\nobject.\n<p>Attributes\n<p><code>query</code> - The name …\n"],["as_string","Evnt::Query","Evnt/Query.html#method-c-as_string","(_query, _parameters = {})",""],["as_string","Evnt::QueryActiverecord","Evnt/QueryActiverecord.html#method-c-as_string","(query, parameters = {})","<p>This function should run a query and return the result as a string object.\n<p>Attributes\n<p><code>query</code> - The name …\n"],["completed?","Evnt::Command","Evnt/Command.html#method-i-completed-3F","()","<p>This function tells if the command is completed or not. The returned object\nshould be a boolean value. …\n"],["err","Evnt::Command","Evnt/Command.html#method-i-err","(message, code: nil)","<p>This function can be used to stop the command execution and add a new\nerror. Using err inside a callback …\n"],["error_codes","Evnt::Command","Evnt/Command.html#method-i-error_codes","()","<p>This function returns the list of error codes of the command. The returned\nobject should be an array …\n"],["error_messages","Evnt::Command","Evnt/Command.html#method-i-error_messages","()","<p>This function returns the list of error messages of the command. The\nreturned object should be an array …\n"],["errors","Evnt::Command","Evnt/Command.html#method-i-errors","()","<p>This function returns the list of errors of the command. The returned\nobject should be an array of hashes …\n"],["new","Evnt::Command","Evnt/Command.html#method-c-new","(params = {})","<p>The constructor is used to run a new command.\n<p>Attributes\n<p><code>params</code> - The list of parameters for the command. …\n"],["new","Evnt::Event","Evnt/Event.html#method-c-new","(params = {})","<p>The constructor is used to initialize a new event. The parameters are\nvalidated and added to the payload …\n"],["new","Evnt::Query","Evnt/Query.html#method-c-new","()","<p>The constructor should not be used. Use class method insthead.\n"],["new","Evnt::Validator","Evnt/Validator.html#method-c-new","(value, options)","<p>The constructor is used to initialize a new validator.\n<p>Attributes\n<p><code>value</code> - The value that should be validated. …\n"],["notify","Evnt::Handler","Evnt/Handler.html#method-i-notify","(event)","<p>This function is called from an event to notify an handler.\n<p>Attributes\n<p><code>event</code> - The event object that call …\n"],["passed?","Evnt::Validator","Evnt/Validator.html#method-i-passed-3F","()","<p>This function tells if the validation is passed or not.\n"],["reloaded?","Evnt::Event","Evnt/Event.html#method-i-reloaded-3F","()","<p>This function tells if the event is reloaded or not. The returned object\nshould be a boolean value corresponding …\n"],["saved?","Evnt::Event","Evnt/Event.html#method-i-saved-3F","()","<p>This function tells if the event is saved or not. As default an event is\nconsidered saved. It should …\n"],["set_not_saved","Evnt::Event","Evnt/Event.html#method-i-set_not_saved","()","<p>This function can be used to set the event as not saved. A not saved event\nshould not notify handlers. …\n"],["CHANGELOG","","CHANGELOG_md.html","","<p>Evnt changelog\n<p>Vesion 3.5.0\n<p>Added listen method to add events on handler.\n"],["MIT-LICENSE","","MIT-LICENSE.html","","<p>Copyright 2017 Ideo SRL\n<p>Permission is hereby granted, free of charge, to any person obtaining a\ncopy of …\n"],["README","","README_md.html","","<p>Evnt\n<p><img src=\"https://badge.fury.io/rb/evnt.svg\">\n<img\nsrc=\"http://inch-ci.org/github/ideonetwork/evnt.svg?branch=master\"> ...\n"]]}}