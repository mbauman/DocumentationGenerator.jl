var documenterSearchIndex = {"docs": [

{
    "location": "#ConvexBodyProximityQueries.closest_points-Tuple{Any,Any,StaticArrays.SArray{Tuple{S},T,1,S} where T where S}",
    "page": "Home",
    "title": "ConvexBodyProximityQueries.closest_points",
    "category": "method",
    "text": "closest_points(p, q, dir; max_iter=100)\n\nCompute the closest points between convex objects p and q if they are not colliding. Provide an initial search direction dir in the space of the problem.\n\nReturn result of type Tuple with StaticArrays of the two closest points on each object.\n\nExamples\n\njulia> using StaticArrays\njulia> p = SMatrix{2,3}([0.0 0.0 1.0; 0.0 2.0 1.0])\njulia> q = SMatrix{2,3}([2.0 2.0 3.0; 0.0 2.0 1.0])\njulia> dir = SVector{2}(1.0, 0.0)\njulia> closest_points(p, q, dir)\n([1.0, 1.0], [2.0, 1.0])\n\n\n\n\n\n"
},

{
    "location": "#ConvexBodyProximityQueries.collision_detection-Union{Tuple{T}, Tuple{N}, Tuple{Any,Any,SArray{Tuple{N},T,1,N}}} where T where N",
    "page": "Home",
    "title": "ConvexBodyProximityQueries.collision_detection",
    "category": "method",
    "text": "collision_detection(p, q, dir; max_iter=100)\n\nCompute if the convex objects p and q are colliding. Provide an initial search direction dir in the space of the problem.\n\nExamples\n\njulia> using StaticArrays\njulia> p = SMatrix{2,3}([0.0 0.0 1.0; 0.0 2.0 1.0])\njulia> q = SMatrix{2,3}([2.0 2.0 3.0; 0.0 2.0 1.0])\njulia> dir = SVector{2}(1.0, 0.0)\njulia> collision_detection(p, q, dir)\nfalse\n\n\n\n\n\n"
},

{
    "location": "#ConvexBodyProximityQueries.minimum_distance-Tuple{Any,Any,StaticArrays.SArray{Tuple{S},T,1,S} where T where S}",
    "page": "Home",
    "title": "ConvexBodyProximityQueries.minimum_distance",
    "category": "method",
    "text": "minimum_distance(p, q, dir; max_iter=100)\n\nCompute the minimum seperating distance between convex objects p and q. Provide an initial search direction dir in the space of the problem.\n\nExamples\n\njulia> using StaticArrays\njulia> p = SMatrix{2,3}([0.0 0.0 1.0; 0.0 2.0 1.0])\njulia> q = SMatrix{2,3}([2.0 2.0 3.0; 0.0 2.0 1.0])\njulia> dir = SVector{2}(1.0, 0.0)\njulia> minimum_distance(p, q, dir)\n1.0\n\n\n\n\n\n"
},

{
    "location": "#ConvexBodyProximityQueries.tolerance_verification-Tuple{Any,Any,StaticArrays.SArray{Tuple{S},T,1,S} where T where S,Real}",
    "page": "Home",
    "title": "ConvexBodyProximityQueries.tolerance_verification",
    "category": "method",
    "text": "tolerance_verifcation(p, q, dir, τ; max_iter=100)\n\nCompute if the convex objects p and q are at least τ tolerance apart. Provide an initial search direction dir in the space of the problem.\n\nExamples\n\njulia> using StaticArrays\njulia> p = SMatrix{2,3}([0.0 0.0 1.0; 0.0 2.0 1.0])\njulia> q = SMatrix{2,3}([2.0 2.0 3.0; 0.0 2.0 1.0])\njulia> dir = SVector{2}(1.0, 0.0)\njulia> tolerance_verification(p, q, dir, 0.25)\ntrue\n\n\n\n\n\n"
},

{
    "location": "#ConvexBodyProximityQueries.findsimplex-Tuple{StaticArrays.SArray{Tuple{S1,S2},T,2,L} where L where T where S2 where S1,StaticArrays.SArray{Tuple{S1,S2},T,2,L} where L where T where S2 where S1,Int64}",
    "page": "Home",
    "title": "ConvexBodyProximityQueries.findsimplex",
    "category": "method",
    "text": "findsimplex(simplex)\n\nCompute the new simplices from a pair of given simplices. Return the new search direction. Return a collision flag if the origin was enclosed by the Minkowski simplex.\n\n\n\n\n\n"
},

{
    "location": "#ConvexBodyProximityQueries.nearestfromsimplex-Union{Tuple{M}, Tuple{N}, Tuple{SArray{Tuple{N,M},T,2,L} where L where T,SArray{Tuple{N,M},T,2,L} where L where T,SArray{Tuple{N},T,1,N} where T,Int64}} where M where N",
    "page": "Home",
    "title": "ConvexBodyProximityQueries.nearestfromsimplex",
    "category": "method",
    "text": "nearestfromsimplex(psimplex, qsimplex, dir2origin)\n\nCompute the nearest points between two simplexes given the direction to in origin in the Minkowski difference space\n\n\n\n\n\n"
},

{
    "location": "#ConvexBodyProximityQueries.proj-Tuple{AbstractArray{T,1} where T,AbstractArray{T,1} where T}",
    "page": "Home",
    "title": "ConvexBodyProximityQueries.proj",
    "category": "method",
    "text": "proj(u, v)\n\nCompute the vector projection of vector v onto vector u.\n\n\n\n\n\n"
},

{
    "location": "#ConvexBodyProximityQueries.support-Tuple{StaticArrays.SArray{Tuple{S1,S2},T,2,L} where L where T where S2 where S1,StaticArrays.SArray{Tuple{S},T,1,S} where T where S}",
    "page": "Home",
    "title": "ConvexBodyProximityQueries.support",
    "category": "method",
    "text": "support(cvxpoly, dir)\n\nCompute the point of contact between a convex object and its supporting hyperplane defined by the given normal direction as a StaticArray.\n\n\n\n\n\n"
},

{
    "location": "#",
    "page": "Home",
    "title": "Home",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [ConvexBodyProximityQueries]\nOrder = [:type, :function]"
},

]}
