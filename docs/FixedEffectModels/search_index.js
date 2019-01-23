var documenterSearchIndex = {"docs": [

{
    "location": "#FixedEffectModels.partial_out-Tuple{DataFrames.AbstractDataFrame,Model}",
    "page": "Home",
    "title": "FixedEffectModels.partial_out",
    "category": "method",
    "text": "Partial out variables in a Dataframe\n\nArguments\n\ndf::AbstractDataFrame\nmodel::Model: A Model created using @model. See @model.\nadd_mean::Bool: Should the initial mean added to the returned variable?\nmethod::Symbol: A symbol for the method. Default is :lsmr (akin to conjugate gradient descent). Other choices are :qr and :cholesky (factorization methods)\nmaxiter::Integer: Maximum number of iterations\ntol::Real: Tolerance\n\nReturns\n\n::DataFrame: a dataframe with as many columns as there are dependent variables and as many rows as the original dataframe.\n::Vector{Int}: a vector of iterations for each column\n::Vector{Bool}: a vector of success for each column\n\nDetails\n\npartial_out returns the residuals of a set of variables after regressing them on a set of regressors. The syntax is similar to reg - but it accepts multiple dependent variables. It returns a dataframe with as many columns as there are dependent variables and as many rows as the original dataframe. The regression model is estimated on only the rows where none of the dependent variables is missing. With the option add_mean = true, the mean of the initial variable is added to the residuals.\n\nExamples\n\nusing  RDatasets, DataFrames, FixedEffectModels, Gadfly\ndf = dataset(\"datasets\", \"iris\")\ndf[:SpeciesC] =  categorical(df[:Species])\nresult = partial_out(df, @model(SepalWidth + SepalLength ~ 1, fe = SpeciesC), add_mean = true)\nplot(layer(result[1], x=\"SepalWidth\", y=\"SepalLength\", Stat.binmean(n=10), Geom.point),\n   layer(result[1], x=\"SepalWidth\", y=\"SepalLength\", Geom.smooth(method=:lm)))\n\n\n\n\n\n"
},

{
    "location": "#FixedEffectModels.reg-Tuple{DataFrames.AbstractDataFrame,Model}",
    "page": "Home",
    "title": "FixedEffectModels.reg",
    "category": "method",
    "text": "Estimate a linear model with high dimensional categorical variables / instrumental variables\n\nArguments\n\ndf::AbstractDataFrame\nmodel::Model: A model created using @model\nsave::Union{Bool, Symbol} = false: Should residuals and eventual estimated fixed effects saved in a dataframe? Use save = :residuals to only save residuals. Use save = :fe to only save fixed effects.\nmethod::Symbol = :lsmr: Method to deman regressors. :lsmr is akin to conjugate gradient descent.  With parallel use :lsmr_parallel. To use multi threaded use lsmr_threads. Other choices are :qr and :cholesky (factorization methods)\ncontrasts::Dict = Dict() An optional Dict of contrast codings for each categorical variable in the formula.  Any unspecified variables will have DummyCoding.\nmaxiter::Integer = 10000: Maximum number of iterations\ntol::Real =1e-8: Tolerance\n\nDetails\n\nModels with instruments variables are estimated using 2SLS. reg tests for weak instruments by computing the Kleibergen-Paap rk Wald F statistic, a generalization of the Cragg-Donald Wald F statistic for non i.i.d. errors. The statistic is similar to the one returned by the Stata command ivreg2.\n\nExamples\n\nusing DataFrames, RDatasets, FixedEffectModels\ndf = dataset(\"plm\", \"Cigar\")\ndf[:StateC] =  categorical(df[:State])\ndf[:YearC] =  categorical(df[:Year])\nreg(df, @model(Sales ~ Price, fe = StateC + YearC))\nreg(df, @model(Sales ~ NDI, fe = StateC + StateC&Year))\nreg(df, @model(Sales ~ NDI, fe = StateC*Year))\nreg(df, @model(Sales ~ (Price ~ Pimin)))\nreg(df, @model(Sales ~ Price, weights = Pop))\nreg(df, @model(Sales ~ NDI, subset = State .< 30))\nreg(df, @model(Sales ~ NDI, vcov = robust))\nreg(df, @model(Sales ~ NDI, vcov = cluster(StateC)))\nreg(df, @model(Sales ~ NDI, vcov = cluster(StateC + YearC)))\nreg(df, @model(Sales ~ YearC), contrasts = Dict(:YearC => DummyCoding(base = 80)))\n\n\n\n\n\n"
},

{
    "location": "#",
    "page": "Home",
    "title": "Home",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [FixedEffectModels]\nOrder = [:type, :function]"
},

]}