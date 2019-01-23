var documenterSearchIndex = {"docs": [

{
    "location": "#Destruct.destruct-Union{Tuple{Array{T,N}}, Tuple{N}, Tuple{T}} where N where T<:Tuple",
    "page": "Home",
    "title": "Destruct.destruct",
    "category": "method",
    "text": "destruct(v::Array{<:Tuple,N})\n\nDestructure an array of tuples to a tuple of arrays. Works for tuples with elements of varying types.\n\nExamples\n\njulia> f(a, b) = a+b, a*b, a-b;\njulia> v = f.(rand(3,1), rand(1,4));\njulia> x, y, z = destruct(v);\njulia> x\n3×4 Array{Float64,2}:\n 0.301013  0.888299  1.03866  1.0867\n 0.853248  1.44053   1.5909   1.63894\n 0.687546  1.27483   1.4252   1.47324\njulia> v = f.(rand(100,1,1), rand(1,100,100));\njulia> @btime destruct(v);\n  7.138 ms (7 allocations: 22.89 MiB)\njulia> x, y, z = f.(rand(100,1,1), rand(1,100,100)) |> destruct;\n\n\n\n\n\n"
},

{
    "location": "#",
    "page": "Home",
    "title": "Home",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [Destruct]\nOrder = [:type, :function]"
},

]}
