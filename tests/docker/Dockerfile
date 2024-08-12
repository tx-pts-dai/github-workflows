FROM alpine

WORKDIR /app

RUN echo "Hello, world!" > hello.txt
COPY *.txt .

# Wildcard allows us to test artifacts
CMD ["cat", "*.txt"]
