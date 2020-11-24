-- Create passengers table
CREATE TABLE IF NOT EXISTS "courses" (
    "id"   SERIAL ,
    "title" VARCHAR(255),
    "description" TEXT,
    "published" BOOLEAN,
    "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),
    "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),
    PRIMARY KEY ("id")
);

-- Copy the data
COPY "courses"("title", "description")
    FROM 'courses.csv'
    DELIMITER ',' CSV HEADER;
