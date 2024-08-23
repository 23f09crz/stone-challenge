import pandas as pd 

df = pd.read_parquet('data/mcc.mcc.parquet',engine='pyarrow')

print(df.head())