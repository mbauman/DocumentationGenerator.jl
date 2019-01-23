var documenterSearchIndex = {"docs": [

{
    "location": "#FixedPointDecimals.FixedDecimal",
    "page": "Home",
    "title": "FixedPointDecimals.FixedDecimal",
    "category": "type",
    "text": "FixedDecimal{T <: Integer, f::Int}\n\nA fixed-point decimal type backed by integral type T, with f digits after the decimal point stored.\n\n\n\n\n\n"
},

{
    "location": "#FixedPointDecimals._apply_exact_float-Union{Tuple{T}, Tuple{Any,Type{T},Union{Float16, Float32, Float64, BigFloat},Integer}} where T",
    "page": "Home",
    "title": "FixedPointDecimals._apply_exact_float",
    "category": "method",
    "text": "_apply_exact_float(f, T, x::Real, i::Integer)\n\nCompute f(T, x, i)::T but avoiding possible loss of precision from an intermediate conversion of i to a floating point type by instead using a BigFloat with sufficient precision if necessary.\n\n\n\n\n\n"
},

{
    "location": "#FixedPointDecimals._round_to_even-Union{Tuple{T}, Tuple{T,T,T}} where T<:Integer",
    "page": "Home",
    "title": "FixedPointDecimals._round_to_even",
    "category": "method",
    "text": "_round_to_even(quotient, remainder, divisor)\n\nRound quotient + remainder / divisor to the nearest even integer, given that 0 ≤ remainder < divisor or 0 ≥ remainder > divisor. (This assumption is satisfied by the return value of fldmod in all cases, and the return value of divrem in cases where divisor is known to be positive.)\n\n\n\n\n\n"
},

{
    "location": "#FixedPointDecimals.ceilmul",
    "page": "Home",
    "title": "FixedPointDecimals.ceilmul",
    "category": "function",
    "text": "FixedPointDecimals.ceilmul(I, x, y) :: I\n\nCompute ceil(I, x * y), returning the result as type I. For floating point values, this function can be more accurate than ceil(x * y).\n\n\n\n\n\n"
},

{
    "location": "#FixedPointDecimals.coefficient-Union{Tuple{Type{FixedDecimal{T,f}}}, Tuple{f}, Tuple{T}} where f where T",
    "page": "Home",
    "title": "FixedPointDecimals.coefficient",
    "category": "method",
    "text": "coefficient(::Type{FD{T, f}}) -> T\n\nCompute 10^f as an Integer without overflow. Note that overflow will not occur for any constructable FD{T, f}.\n\n\n\n\n\n"
},

{
    "location": "#FixedPointDecimals.floormul",
    "page": "Home",
    "title": "FixedPointDecimals.floormul",
    "category": "function",
    "text": "FixedPointDecimals.floormul(I, x, y) :: I\n\nCompute floor(I, x * y), returning the result as type I. For floating point values, this function can be more accurate than floor(x * y).\n\n\n\n\n\n"
},

{
    "location": "#FixedPointDecimals.max_exp10-Union{Tuple{Type{T}}, Tuple{T}} where T<:Integer",
    "page": "Home",
    "title": "FixedPointDecimals.max_exp10",
    "category": "method",
    "text": "max_exp10(T)\n\nThe highest value of x which does not result in an overflow when evaluating T(10)^x. For types of T that do not overflow -1 will be returned.\n\n\n\n\n\n"
},

{
    "location": "#FixedPointDecimals.required_precision-Tuple{Integer}",
    "page": "Home",
    "title": "FixedPointDecimals.required_precision",
    "category": "method",
    "text": "required_precision(n::Integer)\n\nCompute the number of bits of precision needed to represent an integer exactly as a floating point number.\n\nThis is equivalent to counting the number of bits needed to represent the integer, excluding any trailing zeros.\n\n\n\n\n\n"
},

{
    "location": "#FixedPointDecimals.truncmul",
    "page": "Home",
    "title": "FixedPointDecimals.truncmul",
    "category": "function",
    "text": "FixedPointDecimals.truncmul(I, x, y) :: I\n\nCompute trunc(I, x * y), returning the result as type I. For floating point values, this function can be more accurate than trunc(x * y).\n\n\n\n\n\n"
},

{
    "location": "#",
    "page": "Home",
    "title": "Home",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [FixedPointDecimals]\nOrder = [:type, :function]"
},

]}