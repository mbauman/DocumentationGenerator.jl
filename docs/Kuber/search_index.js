var documenterSearchIndex = {"docs": [

{
    "location": "#Kuber.get_logs-Tuple{KuberContext,String}",
    "page": "Home",
    "title": "Kuber.get_logs",
    "category": "method",
    "text": "Fetch logs of the specified Pod\n\nParameters:\n\nname::String (required)\n\nKeyword Args:\n\ncontainer::String : The container for which to stream logs. Defaults to only container if there is one container in the pod.\nfollow::Bool : Follow the log stream of the pod. Defaults to false.\nlimitBytes::Int32 : If set, the number of bytes to read from the server before terminating the log output. This may not display a complete final line of logging, and may return slightly more or slightly less than the specified limit.\npretty::String : If \'true\', then the output is pretty printed.\nprevious::Bool : Return previous terminated container logs. Defaults to false.\nsinceSeconds::Int32 : A relative time in seconds before the current time from which to show logs. If this value precedes the time a pod was started, only logs since the pod start will be returned. If this value is in the future, no logs will be returned. Only one of sinceSeconds or sinceTime may be specified.\nsinceTime::String : An RFC3339 timestamp from which to show logs. If this value precedes the time a pod was started, only logs since the pod start will be returned. If this value is in the future, no logs will be returned. Only one of sinceSeconds or sinceTime may be specified.\ntailLines::Int32 : If set, the number of lines from the end of the logs to show. If not specified, logs are shown from the creation of the container or sinceSeconds or sinceTime\ntimestamps::Bool : If true, add an RFC3339 or RFC3339Nano timestamp at the beginning of every line of log output. Defaults to false.\n\nReturns: String of all log entries, one per line\n\n\n\n\n\n"
},

{
    "location": "#",
    "page": "Home",
    "title": "Home",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [Kuber]\nOrder = [:type, :function]"
},

]}
