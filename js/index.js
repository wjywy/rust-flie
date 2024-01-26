async function main() {
    const module = await import('../pkg/index');
    console.log(module.fib(30));
  }
  
  main();
  