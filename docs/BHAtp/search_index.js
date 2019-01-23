var documenterSearchIndex = {"docs": [

{
    "location": "#BHAtp.p44_1-Tuple{Dict{Symbol,Any}}",
    "page": "Home",
    "title": "BHAtp.p44_1",
    "category": "method",
    "text": "p44_1\n\nAnalysis of elastic rigid-jointed frames using a 2-node Frame structural element and Line finite elements in 2 or 3 dimensions.\n\nConstructors\n\np44_1(data)\n\nArguments\n\n* `data::Dict{Symbol, Any}` : Dictionary containing all input data\n\nDictionary keys\n\n* struc_el::StructuralElement                          : Type of  structural fin_el\n* support::Array{Tuple{Int,Array{Int,1}},1}        : Fixed-displacements vector\n* loaded_nodes::Array{Tuple{Int,Array{Float64,1}},1} : Node load vector\n* properties::Vector{Float64}                          : Material properties\n* x_coords::FloatRange{Float64}                        : x coordinate vector\n* y_coords::FloatRange{Float64}                        : y coordinate vector\n* g_num::Array{Int,2}                                : Element node connections\n* fixed_freedoms::Array{Tuple{Vector{Int}}           : Fixed freedoms\n\nOptional additional dictionary keys\n\n* etype::Vector{Int}                                 : Element material vector\n* penalty::Float64                                     : Penalty for fixed freedoms\n* z_coords::FloatRange{Float64}                        : z coordinate vector\n* eq_nodal_forces_and_moments                          : Equivalent nodal loads\n\nReturn values\n\n* (jfem, dis_df, fm_df)        : Tuple of jFem, dis_df and fm_df\n                                 where:\n                                    jfem::jFem    : Computational result type\n                                    dis_df        : Displacement data table\n                                    fm_df         : Forces and moments data table\n\nRelated help\n\n?StructuralElement  : Help on structural elements\n?Beam               : Help on a Beam structural fin_el\n?FiniteElement      : Help on finite element types\n\n\n\n\n\n"
},

{
    "location": "#",
    "page": "Home",
    "title": "Home",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [BHAtp]\nOrder = [:type, :function]"
},

]}