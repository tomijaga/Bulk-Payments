# Bulk-Payments

### Installation Instructions (in CMD line)
  npm install
  
### Usage Instructions
Set the signing key in the [.env](https://github.com/tomijaga/Bulk-Payments/blob/master/.env) file to the signing key 
of the account you want to send coins from

Then set the transactions array in [index.js](https://github.com/tomijaga/Bulk-Payments/blob/master/index.js)
```ts
    
    {
      amount: Amount you want to send
      recipient: Account number of the recipient
    }
  ```
  
  Once set run 
  
    node index.js 
  
  
