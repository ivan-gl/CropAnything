FROM nvcr.io/nvidia/pytorch:21.09-py3

RUN git clone https://github.com/NVIDIA-AI-IOT/torch2trt && cd torch2trt && python setup.py install