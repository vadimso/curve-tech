provider "aws" {
  region = "eu-west-1"  # Set your desired AWS region
}

resource "aws_s3_bucket" "static_site_bucket" {
  bucket = "curevetech-bucket"  # Replace with a globally unique bucket name
  acl    = "public-read"  # This makes the bucket contents publicly accessible
  policy = <<EOF
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "DenyUnEncryptedConnection",
            "Effect": "Deny",
            "Principal": "*",
            "Action": "s3:*",
            "Resource": [
                "arn:aws:s3:::static_site_bucket",
                "arn:aws:s3:::static_site_bucket/*"
            ],
            "Condition": {
                "Bool": {
                    "aws:SecureTransport": "false"
                }
            }
        }
    ]
}
EOF
}
 # tags = {
 #   Name = "StaticSiteBucket"
  #}
#}

resource "aws_s3_bucket_object" "index_html" {
  bucket = aws_s3_bucket.static_site_bucket.id
  key    = "index.html"
  source = "/home/curve-tech/terraform/s3/index.html"  # Path to your local HTML file
  content_type = "text/html"
  control_object_ownership = false

}

output "bucket_name" {
  value = aws_s3_bucket.static_site_bucket.id
}

