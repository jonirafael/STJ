
using API.Entities;

namespace API.Interface
{
    public interface iTokenService
    {
        string CreateToken(AppUser user);        
    }
}