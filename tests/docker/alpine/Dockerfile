ARG GO_VERSION
ARG ALPINE_VERSION
# compile sam
FROM public.ecr.aws/docker/library/golang:${GO_VERSION}-alpine${ALPINE_VERSION} AS builder

WORKDIR /app
RUN echo "Hello, world!"
RUN echo "Using go version ${GO_VERSION} and alpine version ${ALPINE_VERSION}"