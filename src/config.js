const config = {
    MAX_ATTACHMENT_SIZE: 5000000,
    s3: {
        REGION: "us-west-2",
        BUCKET: "notes-api-prod-serverlessdeploymentbucket-w0i0lqc2l1x2"
    },
    apiGateway: {
        REGION: "us-west-2",
        URL: "https://wk8htex6cd.execute-api.us-west-2.amazonaws.com/prod"
    },
    cognito: {
        REGION: "us-west-2",
        USER_POOL_ID: "us-west-2_HhfChwuav",
        APP_CLIENT_ID: "1h4j7tns07pt4jh19dth4a7gau",
        IDENTITY_POOL_ID: "us-west-2:4e4e2ed7-7981-4da9-907c-219634a1bc18"
    }
}

export default config;