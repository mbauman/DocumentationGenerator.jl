var documenterSearchIndex = {"docs": [

{
    "location": "#DifferenceLists.DL",
    "page": "Home",
    "title": "DifferenceLists.DL",
    "category": "type",
    "text": "DL(func)\n\nGiven function func, construct a difference list.\n\nDifference lists are highly efficient, immutable, concatenate and prepend in constant time, and iterate in time N.\n\nExamples\n\njulia> [x for x = dl(1, 2, 3)]\n3-element Array{Int64,1}:\n 1\n 2\n 3\n\n\n\n\n\n"
},

{
    "location": "#DifferenceLists.DL-Tuple",
    "page": "Home",
    "title": "DifferenceLists.DL",
    "category": "method",
    "text": "(a::DL)(lists::DL...)::DL\n\nA difference list itself can be used as shorthand for concat.\n\nSee also: dl, concat\n\nExamples\n\njulia> dl(1, 2)(dl(3, 4), dl(5, 6, 7))\ndl(1, 2, 3, 4, 5, 6, 7)\n\n\n\n\n\n"
},

{
    "location": "#DifferenceLists.concat-Tuple{Vararg{DL,N} where N}",
    "page": "Home",
    "title": "DifferenceLists.concat",
    "category": "method",
    "text": "concat(lists::DL...)::DL\n\nConcatenate difference lists in constant time\n\nSee also: dl\n\nExamples\n\njulia> concat(dl(1, 2), dl(3, 4))\ndl(1, 2, 3, 4)\n\njulia> concat(dl(1), dl(2))\ndl(1, 2)\n\n\n\n\n\n"
},

{
    "location": "#DifferenceLists.dl-Tuple{}",
    "page": "Home",
    "title": "DifferenceLists.dl",
    "category": "method",
    "text": "dl()::DL\ndl(items...)::DL\n\nConstruct a difference list of items.\n\nExamples\n\njulia> dl()\ndl()\n\njulia> dl(1)\ndl(1)\n\njulia> dl(1, 2, 3)\ndl(1, 2, 3)\n\njulia> dl(1, dl(2, 3), 4)\ndl(1, dl(2, 3), 4)\n\n\n\n\n\n"
},

{
    "location": "#DifferenceLists.push-Tuple{DL,Vararg{Any,N} where N}",
    "page": "Home",
    "title": "DifferenceLists.push",
    "category": "method",
    "text": "push(item, dl::DL)\n\nPush an item onto the end of a difference list.\n\nExamples\n\njulia> push(2, push(1, dl(7, 8, 9)))\ndl(7, 8, 9, 1, 2)\n\n\n\n\n\n"
},

{
    "location": "#DifferenceLists.pushfirst-Tuple{DL,Vararg{Any,N} where N}",
    "page": "Home",
    "title": "DifferenceLists.pushfirst",
    "category": "method",
    "text": "pushfirst(item, dl::DL)\n\nPush an item onto the front of a difference list.\n\nExamples\n\njulia> pushfirst(1, pushfirst(2, dl(7, 8, 9)))\ndl(1, 2, 7, 8, 9)\n\n\n\n\n\n"
},

{
    "location": "#DifferenceLists.todl-Tuple{Any}",
    "page": "Home",
    "title": "DifferenceLists.todl",
    "category": "method",
    "text": "todl(items)\n\nCreate a difference list from something you can iterate over\n\nExamples\n\njulia> todl([1, 2, 3])\ndl(1, 2, 3)\n\n\n\n\n\n"
},

{
    "location": "#DifferenceLists.nextFor-Tuple{Any,Nothing,Any}",
    "page": "Home",
    "title": "DifferenceLists.nextFor",
    "category": "method",
    "text": "nextFor(items, state, last)\n\nCompute the next iteration value for an embedded collection.\n\n\n\n\n\n"
},

{
    "location": "#",
    "page": "Home",
    "title": "Home",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [DifferenceLists]\nOrder = [:type, :function]"
},

]}