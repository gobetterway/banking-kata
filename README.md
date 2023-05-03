# Bank account kata

## Task

- [ ] Do a code review
- [ ] Add the date for each line of the statement
- [ ] Add the feature : delete an operation

## Tips

Mocker la date système 
```Typescript
beforeEach(() => {
    jest
        .spyOn(global, 'Date')
        .mockImplementationOnce(() => new Date('2019-08-24T11:01:58.135Z'));
});
```
