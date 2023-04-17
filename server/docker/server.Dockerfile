FROM pytorch/pytorch:latest

RUN pip install --upgrade pip

RUN pip install jupyterlab

RUN pip install -y git+https://github.com/facebookresearch/segment-anything.git