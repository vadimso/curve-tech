provider "aws" {
  region = "eu-west-1"  
}

resource "aws_vpc" "curve-techVPC" {
  cidr_block = "10.0.0.0/16"
  
  tags = {
    Name = "curve-techVPC"
  }
}

resource "aws_subnet" "subnet_a" {
  vpc_id     = aws_vpc.curve-techVPC.id
  cidr_block = "10.0.1.0/24"
  availability_zone = "eu-west-1a"
  
  tags = {
    Name = "SubnetA"
  }
}

resource "aws_subnet" "subnet_b" {
  vpc_id     = aws_vpc.curve-techVPC.id
  cidr_block = "10.0.2.0/24"
  availability_zone = "eu-west-1b" 
  
  tags = {
    Name = "SubnetB"
  }
}


