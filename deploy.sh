#!/bin/bash

## Colours and font styles
## Syntax: echo -e "${FOREGROUND_COLOUR}${BACKGROUND_COLOUR}${STYLE}Hello world!${RESET_ALL}"

# Check if AWS Installed
if [[ $(aws --version) && $? -eq 0 ]]; then
	 echo "Please install AWS CLI before proceeing futhur"
	 exit 1	
fi

# Check for AWS cli configuration
if [[ $(aws configure --profile transin list) && $? -eq 0 ]]; then
	 echo "transin AWS profile Exists"	
else
	echo "transin AWS profile Does not exist. "
fi

# Upload the file to relavant S3 bucket
echo -e "${FG_RED}${BG_BLACK}Uploading the yaml to S3 bucket${RESET_ALL}"
aws s3 cp transin-service-deployment.yaml s3://transin-staging-us-east-1-service-templates/starter-kit.yaml --profile transin
echo "Upload to S3 completed"

echo "Launching stack with details"
aws cloudformation --profile transin --region us-east-1 create-stack \
--stack-name starter-kit \
--template-url https://s3.amazonaws.com/transin-staging-us-east-1-service-templates/starter-kit.yaml \
--capabilities CAPABILITY_NAMED_IAM
echo "Launching stack complete"