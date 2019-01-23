var documenterSearchIndex = {"docs": [

{
    "location": "#ExprRules.ExpressionIterator",
    "page": "Home",
    "title": "ExprRules.ExpressionIterator",
    "category": "type",
    "text": "ExpressionIterator(grammar::Grammar, max_depth::Int, sym::Symbol)\n\nAn iterator over all possible expressions of a grammar up to max_depth with start symbol sym.\n\n\n\n\n\n"
},

{
    "location": "#ExprRules.Grammar",
    "page": "Home",
    "title": "ExprRules.Grammar",
    "category": "type",
    "text": "Grammar\n\nRepresents a grammar and its production rules. Use the @grammar macro to create a Grammar object.\n\n\n\n\n\n"
},

{
    "location": "#ExprRules.Interpreter.SymbolTable",
    "page": "Home",
    "title": "ExprRules.Interpreter.SymbolTable",
    "category": "type",
    "text": "Interpreter.SymbolTable(grammar::Grammar, mod::Module=Main)\n\nReturns a symbol table populated with mapping from symbols in grammar to symbols in module mod or Main, if defined.\n\n\n\n\n\n"
},

{
    "location": "#ExprRules.NodeLoc",
    "page": "Home",
    "title": "ExprRules.NodeLoc",
    "category": "type",
    "text": "NodeLoc\n\nA helper struct that points to a node in the tree via its parent such that the child can be easily swapped out. If i is 0 the node pointed to is the root node and parent is the node itself.\n\n\n\n\n\n"
},

{
    "location": "#ExprRules.NodeRecycler",
    "page": "Home",
    "title": "ExprRules.NodeRecycler",
    "category": "type",
    "text": "Use a circular buffer to contain used RuleNodes to be recycled. First check the recycle bin to see if there are available RuleNodes, if not allocated a new one.  This helps minimize memory allocations and improves performance\n\n\n\n\n\n"
},

{
    "location": "#ExprRules.RuleNode",
    "page": "Home",
    "title": "ExprRules.RuleNode",
    "category": "type",
    "text": "RuleNode\n\nType for representing nodes in an expression tree.\n\n\n\n\n\n"
},

{
    "location": "#ExprRules.child_types-Tuple{Grammar,Int64}",
    "page": "Home",
    "title": "ExprRules.child_types",
    "category": "method",
    "text": "child_types(grammar::Grammar, rule_index::Int)\n\nReturns the types of the children (nonterminals) of the production rule at rule_index.\n\n\n\n\n\n"
},

{
    "location": "#ExprRules.child_types-Tuple{Grammar,RuleNode}",
    "page": "Home",
    "title": "ExprRules.child_types",
    "category": "method",
    "text": "child_types(grammar::Grammar, node::RuleNode)\n\nReturns the list of child types in the production rule used by node.\n\n\n\n\n\n"
},

{
    "location": "#ExprRules.contains_returntype",
    "page": "Home",
    "title": "ExprRules.contains_returntype",
    "category": "function",
    "text": "contains_returntype(node::RuleNode, grammar::Grammar, sym::Symbol, maxdepth::Int=typemax(Int))\n\nReturns true if the tree rooted at node contains at least one node at depth less than maxdepth with the given return type.\n\n\n\n\n\n"
},

{
    "location": "#ExprRules.count_expressions-Tuple{ExpressionIterator}",
    "page": "Home",
    "title": "ExprRules.count_expressions",
    "category": "method",
    "text": "count_expressions(iter::ExpressionIterator)\n\nCount the number of possible expressions in the expression iterator.\n\n\n\n\n\n"
},

{
    "location": "#ExprRules.count_expressions-Tuple{Grammar,Int64,Symbol}",
    "page": "Home",
    "title": "ExprRules.count_expressions",
    "category": "method",
    "text": "count_expressions(grammar::Grammar, max_depth::Int, sym::Symbol)\n\nCount the number of possible expressions of a grammar up to max_depth with start symbol sym.\n\n\n\n\n\n"
},

{
    "location": "#ExprRules.depth-Tuple{RuleNode}",
    "page": "Home",
    "title": "ExprRules.depth",
    "category": "method",
    "text": "depth(root::RuleNode)\n\nReturn the depth of the expression tree rooted at root.\n\n\n\n\n\n"
},

{
    "location": "#ExprRules.get_executable-Tuple{RuleNode,Grammar}",
    "page": "Home",
    "title": "ExprRules.get_executable",
    "category": "method",
    "text": "get_executable(rulenode::RuleNode, grammar::Grammar)\n\nReturns the executable julia expression represented in the expression tree with root rulenode.  The returned expression can be evaluated using eval().\n\n\n\n\n\n"
},

{
    "location": "#ExprRules.iseval-Tuple{Any}",
    "page": "Home",
    "title": "ExprRules.iseval",
    "category": "method",
    "text": "iseval(rule::Any)\n\nReturns true if the rule is the special evaluate immediately function, i.e., _()\n\n\n\n\n\n"
},

{
    "location": "#ExprRules.iseval-Tuple{Grammar,Int64}",
    "page": "Home",
    "title": "ExprRules.iseval",
    "category": "method",
    "text": "iseval(grammar::Grammar, rule_index::Int)\n\nReturns true if the production rule at rule_index contains the special _() eval function.\n\n\n\n\n\n"
},

{
    "location": "#ExprRules.iseval-Tuple{Grammar}",
    "page": "Home",
    "title": "ExprRules.iseval",
    "category": "method",
    "text": "iseval(grammar::Grammar)\n\nReturns true if any production rules in grammar contain the special _() eval function.\n\n\n\n\n\n"
},

{
    "location": "#ExprRules.isterminal-Tuple{Any,AbstractArray{Symbol,1}}",
    "page": "Home",
    "title": "ExprRules.isterminal",
    "category": "method",
    "text": "isterminal(rule::Any, types::AbstractVector{Symbol})\n\nReturns true if the rule is terminal, ie does not contain any of the types in the provided vector. For example, :(x) is terminal, and :(1+1) is terminal, but :(Real + Real) is typically not.\n\n\n\n\n\n"
},

{
    "location": "#ExprRules.isterminal-Tuple{Grammar,Int64}",
    "page": "Home",
    "title": "ExprRules.isterminal",
    "category": "method",
    "text": "isterminal(grammar::Grammar, rule_index::Int)\n\nReturns true if the production rule at rule_index is terminal, i.e., does not contain any nonterminal symbols.\n\n\n\n\n\n"
},

{
    "location": "#ExprRules.isterminal-Tuple{Grammar,RuleNode}",
    "page": "Home",
    "title": "ExprRules.isterminal",
    "category": "method",
    "text": "isterminal(grammar::Grammar, node::RuleNode)\n\nReturns true if the production rule used by node is terminal, i.e., does not contain any nonterminal symbols.\n\n\n\n\n\n"
},

{
    "location": "#ExprRules.max_arity-Tuple{Grammar}",
    "page": "Home",
    "title": "ExprRules.max_arity",
    "category": "method",
    "text": "max_arity(grammar::Grammar)\n\nReturns the maximum arity (number of children) over all production rules in the grammar.\n\n\n\n\n\n"
},

{
    "location": "#ExprRules.mindepth-Tuple{Grammar,Symbol,AbstractArray{Int64,1}}",
    "page": "Home",
    "title": "ExprRules.mindepth",
    "category": "method",
    "text": "mindepth(grammar::Grammar, typ::Symbol, dmap::AbstractVector{Int})\n\nReturns the minimum depth achievable for a given nonterminal symbol\n\n\n\n\n\n"
},

{
    "location": "#ExprRules.mindepth_map-Tuple{Grammar}",
    "page": "Home",
    "title": "ExprRules.mindepth_map",
    "category": "method",
    "text": "mindepth_map(grammar::Grammar)\n\nReturns the minimum depth achievable for each production rule, dmap.\n\n\n\n\n\n"
},

{
    "location": "#ExprRules.nchildren-Tuple{Grammar,Int64}",
    "page": "Home",
    "title": "ExprRules.nchildren",
    "category": "method",
    "text": "nchildren(grammar::Grammar, rule_index::Int)\n\nReturns the number of children (nonterminals) of the production rule at rule_index.\n\n\n\n\n\n"
},

{
    "location": "#ExprRules.nchildren-Tuple{Grammar,RuleNode}",
    "page": "Home",
    "title": "ExprRules.nchildren",
    "category": "method",
    "text": "nchildren(grammar::Grammar, node::RuleNode)\n\nReturns the number of children in the production rule used by node.\n\n\n\n\n\n"
},

{
    "location": "#ExprRules.node_depth-Tuple{RuleNode,RuleNode}",
    "page": "Home",
    "title": "ExprRules.node_depth",
    "category": "method",
    "text": "node_depth(root::RuleNode, node::RuleNode)\n\nReturn the depth of node for an expression tree rooted at root.  Depth is 1 when root == node.\n\n\n\n\n\n"
},

{
    "location": "#ExprRules.nonterminals-Tuple{Grammar}",
    "page": "Home",
    "title": "ExprRules.nonterminals",
    "category": "method",
    "text": "nonterminals(grammar::Grammar)\n\nReturns a list of nonterminals in the grammar.\n\n\n\n\n\n"
},

{
    "location": "#ExprRules.return_type-Tuple{Grammar,Int64}",
    "page": "Home",
    "title": "ExprRules.return_type",
    "category": "method",
    "text": "return_type(grammar::Grammar, rule_index::Int)\n\nReturns the type of the production rule at rule_index.\n\n\n\n\n\n"
},

{
    "location": "#ExprRules.return_type-Tuple{Grammar,RuleNode}",
    "page": "Home",
    "title": "ExprRules.return_type",
    "category": "method",
    "text": "return_types(grammar::Grammar, node::RuleNode)\n\nReturns the return type in the production rule used by node.\n\n\n\n\n\n"
},

{
    "location": "#ExprRules.root_node_loc-Tuple{RuleNode}",
    "page": "Home",
    "title": "ExprRules.root_node_loc",
    "category": "method",
    "text": "root_node_loc(root::RuleNode)\n\nReturns a NodeLoc pointing to the root node.\n\n\n\n\n\n"
},

{
    "location": "#StatsBase.sample",
    "page": "Home",
    "title": "StatsBase.sample",
    "category": "function",
    "text": "sample(root::RuleNode, typ::Symbol, grammar::Grammar, maxdepth::Int=typemax(Int))\n\nSelects a uniformly random node from the tree, limited to maxdepth.\n\n\n\n\n\n"
},

{
    "location": "#StatsBase.sample",
    "page": "Home",
    "title": "StatsBase.sample",
    "category": "function",
    "text": "sample(::Type{NodeLoc}, root::RuleNode, maxdepth::Int=typemax(Int))\n\nSelects a uniformly random node in the tree no deeper than maxdepth using reservoir sampling. Returns a NodeLoc that specifies the location using its parent so that the subtree can be replaced.\n\n\n\n\n\n"
},

{
    "location": "#StatsBase.sample",
    "page": "Home",
    "title": "StatsBase.sample",
    "category": "function",
    "text": "sample(root::RuleNode, typ::Symbol, grammar::Grammar,\n                      maxdepth::Int=typemax(Int))\n\nSelects a uniformly random node of the given return type, typ, limited to maxdepth.\n\n\n\n\n\n"
},

{
    "location": "#StatsBase.sample",
    "page": "Home",
    "title": "StatsBase.sample",
    "category": "function",
    "text": "sample(::Type{NodeLoc}, root::RuleNode, typ::Symbol, grammar::Grammar)\n\nSelects a uniformly random node in the tree of a given type, specified using its parent such that the subtree can be replaced. Returns a NodeLoc.\n\n\n\n\n\n"
},

{
    "location": "#Base.get-Tuple{RuleNode,NodeLoc}",
    "page": "Home",
    "title": "Base.get",
    "category": "method",
    "text": "get(root::RuleNode, loc::NodeLoc)\n\nObtain the node pointed to by loc.\n\n\n\n\n\n"
},

{
    "location": "#Base.insert!-Tuple{RuleNode,NodeLoc,RuleNode}",
    "page": "Home",
    "title": "Base.insert!",
    "category": "method",
    "text": "insert!(loc::NodeLoc, rulenode::RuleNode)\n\nReplaces the subtree pointed to by loc with the given rulenode.\n\n\n\n\n\n"
},

{
    "location": "#Base.length-Tuple{RuleNode}",
    "page": "Home",
    "title": "Base.length",
    "category": "method",
    "text": "Return the number of vertices in the tree rooted at root.\n\n\n\n\n\n"
},

{
    "location": "#Base.rand",
    "page": "Home",
    "title": "Base.rand",
    "category": "function",
    "text": "rand(::Type{RuleNode}, grammar::Grammar, typ::Symbol, dmap::AbstractVector{Int}, max_depth::Int=10)\n\nGenerates a random RuleNode of return type typ and maximum depth max_depth guided by a minimum depth map dmap.\n\n\n\n\n\n"
},

{
    "location": "#Base.rand",
    "page": "Home",
    "title": "Base.rand",
    "category": "function",
    "text": "rand(::Type{RuleNode}, grammar::Grammar, typ::Symbol, max_depth::Int=10)\n\nGenerates a random RuleNode of return type typ and maximum depth max_depth.\n\n\n\n\n\n"
},

{
    "location": "#Core.eval-Tuple{Dict{Symbol,Any},Any}",
    "page": "Home",
    "title": "Core.eval",
    "category": "method",
    "text": "Core.eval(tab::SymbolTable, ex::Expr)\n\nEvaluate the expression ex using symbol table tab \n\n\n\n\n\n"
},

{
    "location": "#Core.eval-Tuple{RuleNode,Grammar}",
    "page": "Home",
    "title": "Core.eval",
    "category": "method",
    "text": "Core.eval(rulenode::RuleNode, grammar::Grammar)\n\nEvaluate the expression tree with root rulenode.\n\n\n\n\n\n"
},

{
    "location": "#ExprRules.get_childtypes-Tuple{Any,AbstractArray{Symbol,1}}",
    "page": "Home",
    "title": "ExprRules.get_childtypes",
    "category": "method",
    "text": "get_childtypes(rule::Any, types::AbstractVector{Symbol})\n\nReturns the child types of a production rule.\n\n\n\n\n\n"
},

{
    "location": "#",
    "page": "Home",
    "title": "Home",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [ExprRules]\nOrder = [:type, :function]"
},

]}
