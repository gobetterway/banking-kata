# Bank account kata

## Task

- [ ] Do a code review
- [ ] Add the date for each line of the statement
- [ ] Add the feature : delete an operation

## Tips

Mocker la date système 
```Typescript
    const date = new Date('2019-08-24T11:01:58.135Z')
    beforeAll(() => {
        jest
            .spyOn(global, 'Date')
            .mockImplementation(() => date);
    });
```
