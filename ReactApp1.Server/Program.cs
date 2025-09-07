var builder = WebApplication.CreateBuilder(args);
builder.Services.AddControllers();
builder.Services.AddCors((opt) =>
{
    opt.AddDefaultPolicy(builder => builder.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader());
});
var app = builder.Build();
app.UseCors();
app.UseDefaultFiles();
app.MapStaticAssets();
app.UseHttpsRedirection();
app.UseAuthorization();
app.MapControllers();
app.MapFallbackToFile("/index.html");
app.Run();
