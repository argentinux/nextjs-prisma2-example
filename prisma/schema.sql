DROP TABLE if EXISTS list;
DROP TABLE if EXISTS todos;

CREATE TABLE list (
  id SERIAL PRIMARY KEY,
  name VARCHAR(50) NOT NULL
);

CREATE TABLE todos (
  id SERIAL PRIMARY KEY,
  listId INT NOT NULL,
  title VARCHAR(50) NOT NULL,
  done BOOLEAN DEFAULT false,
  CONSTRAINT fk_list 
    FOREIGN KEY(listId)
    REFERENCES list(id)
    ON DELETE CASCADE
);

-- DUMB DATA 
INSERT INTO list(name)
VALUES ('Development'),
       ('Design');

INSERT INTO todos(listId, title)
VALUES (1, 'Create a server with Rust'),
       (1, 'Create a website with wasm'),
       (2, 'Design and Prototype an App with FIGMA');
