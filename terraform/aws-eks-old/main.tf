provider "aws" {
  region = "eu-west-1"  # Change to your desired region
}

module "eks_cluster" {
  source          = "terraform-aws-modules/eks/aws"
  cluster_name    = "curve-tech-eks-cluster"
  subnets         = ["subnet-08ca46c99afc2a5b2", "subnet-015841d7f99af5b78"]  # Replace with your subnet IDs
  vpc_id          = "vpc-029b6b0c06ba11ddf"  # Replace with your VPC ID
  tags = {
    Terraform   = "true"
    Environment = "dev"
  }
}

module "node_group" {
  source                  = "terraform-aws-modules/eks/aws//modules/node_group"
  cluster_name            = module.eks_cluster.cluster_id
  node_group_name         = "node-group-1"
  subnet_ids              = ["subnet-08ca46c99afc2a5b2"]  # Replace with your subnet ID
  scaling_config = {
    desired_size = 2
    max_size     = 2
    min_size     = 2
  }
}

module "node_group" {
  source                  = "terraform-aws-modules/eks/aws//modules/node_group"
  cluster_name            = module.eks_cluster.cluster_id
  node_group_name         = "node-group-2"
  subnet_ids              = ["subnet-015841d7f99af5b78" # Replace with your subnet ID
  scaling_config = {
    desired_size = 2
    max_size     = 2
    min_size     = 2
  }
}

